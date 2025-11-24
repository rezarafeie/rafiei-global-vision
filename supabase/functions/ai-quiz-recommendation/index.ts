import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { answers } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build context from user answers
    const answersText = answers.map((a: any, i: number) => 
      `سوال ${i + 1}: ${a.question}\nجواب: ${a.answer}`
    ).join('\n\n');

    const systemPrompt = `تو یک مشاور فروش حرفه‌ای برای محصولات آموزشی و کسب‌وکار هستی. 
بر اساس جواب‌های کاربر، باید بهترین محصولات رو پیشنهاد بدی.

محصولات موجود:
1. دوره شروع (۶۰٪ تخفیف) - برای مبتدی‌ها و کسانی که می‌خوان از صفر شروع کنن
2. شبکه بدون مرز (۴۰٪ تخفیف) - VPN برای دسترسی به اینترنت آزاد
3. صرافی رفیعی (۵۰٪ تخفیف کارمزد) - نقد کردن درآمد دلاری
4. ثبت شرکت (۲۰٪ تخفیف) - برای جدی کردن کسب‌وکار
5. افتتاح حساب (۲۰٪ تخفیف) - حساب بانکی بین‌المللی
6. کوچ هوشمند (۶۰٪ تخفیف) - مشاوره AI شخصی

خروجی باید شامل:
- label: یک جمله کوتاه درباره شخصیت کاربر
- title: عنوان محصول پیشنهادی با درصد تخفیف
- description: توضیح کوتاه چرا این محصول مناسبه
- recommendations: آرایه‌ای از محصولات پیشنهادی (حداکثر 2 محصول)

فقط JSON برگردون، بدون توضیح اضافی.`;

    const userPrompt = `بر اساس این جواب‌ها، بهترین محصول رو پیشنهاد بده:

${answersText}

JSON خروجی:`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    // Parse AI response
    let recommendation;
    try {
      // Try to extract JSON from the response
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        recommendation = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("No JSON found in response");
      }
    } catch (e) {
      console.error("Failed to parse AI response:", e);
      // Fallback to a default recommendation
      recommendation = {
        label: "تو یک شروع‌کننده با انگیزه هستی",
        title: "دوره شروع | ۶۰٪ تخفیف",
        description: "بهترین راه برای شروع مسیر درآمد دلاری",
        recommendations: [
          {
            product: "دوره شروع",
            discount: "۶۰٪",
            ctaText: "خرید دوره شروع با ۶۰٪ تخفیف",
            ctaLink: "https://academy.rafiei.co/enroll/?course=boundless"
          }
        ]
      };
    }

    return new Response(
      JSON.stringify(recommendation),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
