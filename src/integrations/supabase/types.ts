export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      application_documents: {
        Row: {
          application_id: string | null
          created_at: string
          document_type: string
          file_name: string
          file_path: string
          file_size: number | null
          id: string
          mime_type: string | null
          updated_at: string
          uploaded_at: string
          user_id: string
          verification_status: string | null
        }
        Insert: {
          application_id?: string | null
          created_at?: string
          document_type: string
          file_name: string
          file_path: string
          file_size?: number | null
          id?: string
          mime_type?: string | null
          updated_at?: string
          uploaded_at?: string
          user_id: string
          verification_status?: string | null
        }
        Update: {
          application_id?: string | null
          created_at?: string
          document_type?: string
          file_name?: string
          file_path?: string
          file_size?: number | null
          id?: string
          mime_type?: string | null
          updated_at?: string
          uploaded_at?: string
          user_id?: string
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "application_documents_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          admin_notes: string | null
          business_address: string | null
          business_category: string | null
          business_name: string | null
          business_registration_number: string | null
          business_type: string | null
          client_type: string | null
          country_of_operation: string | null
          created_at: string
          date_of_birth: string | null
          email: string
          estimated_volume_usd: number | null
          full_name: string | null
          gateway_use_description: string | null
          id: string
          national_id_number: string | null
          nationality: string | null
          phone_number: string | null
          preferred_currency: string | null
          previous_payment_providers: string | null
          product_description: string | null
          residential_address: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          social_media_url: string | null
          status: string
          submitted_at: string
          target_client_countries: string | null
          tax_id: string | null
          updated_at: string
          user_id: string
          website_url: string | null
        }
        Insert: {
          admin_notes?: string | null
          business_address?: string | null
          business_category?: string | null
          business_name?: string | null
          business_registration_number?: string | null
          business_type?: string | null
          client_type?: string | null
          country_of_operation?: string | null
          created_at?: string
          date_of_birth?: string | null
          email: string
          estimated_volume_usd?: number | null
          full_name?: string | null
          gateway_use_description?: string | null
          id?: string
          national_id_number?: string | null
          nationality?: string | null
          phone_number?: string | null
          preferred_currency?: string | null
          previous_payment_providers?: string | null
          product_description?: string | null
          residential_address?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          social_media_url?: string | null
          status?: string
          submitted_at?: string
          target_client_countries?: string | null
          tax_id?: string | null
          updated_at?: string
          user_id: string
          website_url?: string | null
        }
        Update: {
          admin_notes?: string | null
          business_address?: string | null
          business_category?: string | null
          business_name?: string | null
          business_registration_number?: string | null
          business_type?: string | null
          client_type?: string | null
          country_of_operation?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string
          estimated_volume_usd?: number | null
          full_name?: string | null
          gateway_use_description?: string | null
          id?: string
          national_id_number?: string | null
          nationality?: string | null
          phone_number?: string | null
          preferred_currency?: string | null
          previous_payment_providers?: string | null
          product_description?: string | null
          residential_address?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          social_media_url?: string | null
          status?: string
          submitted_at?: string
          target_client_countries?: string | null
          tax_id?: string | null
          updated_at?: string
          user_id?: string
          website_url?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number | null
          card_brand: string | null
          card_last4: number | null
          created: number | null
          created_at: string
          currency: string | null
          customer_email: string | null
          customer_name: string | null
          id: number | null
          nowpayments_invoice_id: string | null
          payment_id: string | null
          payment_method_type: string | null
          proof_url: string | null
          provider: string
          status: string | null
          stripe_session_id: string | null
          transaction_hash: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          card_brand?: string | null
          card_last4?: number | null
          created?: number | null
          created_at?: string
          currency?: string | null
          customer_email?: string | null
          customer_name?: string | null
          id?: number | null
          nowpayments_invoice_id?: string | null
          payment_id?: string | null
          payment_method_type?: string | null
          proof_url?: string | null
          provider?: string
          status?: string | null
          stripe_session_id?: string | null
          transaction_hash?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          card_brand?: string | null
          card_last4?: number | null
          created?: number | null
          created_at?: string
          currency?: string | null
          customer_email?: string | null
          customer_name?: string | null
          id?: number | null
          nowpayments_invoice_id?: string | null
          payment_id?: string | null
          payment_method_type?: string | null
          proof_url?: string | null
          provider?: string
          status?: string | null
          stripe_session_id?: string | null
          transaction_hash?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      payouts: {
        Row: {
          amount: number | null
          arrival_date: number | null
          automatic: boolean | null
          currency: string | null
          description: string | null
          destination: string | null
          id: number | null
          method: string | null
          status: string | null
        }
        Insert: {
          amount?: number | null
          arrival_date?: number | null
          automatic?: boolean | null
          currency?: string | null
          description?: string | null
          destination?: string | null
          id?: number | null
          method?: string | null
          status?: string | null
        }
        Update: {
          amount?: number | null
          arrival_date?: number | null
          automatic?: boolean | null
          currency?: string | null
          description?: string | null
          destination?: string | null
          id?: number | null
          method?: string | null
          status?: string | null
        }
        Relationships: []
      }
      stripeaccounts: {
        Row: {
          account_id: string | null
          charges_enabled: boolean | null
          created_at: string | null
          details_submitted: boolean | null
          id: number | null
          payouts_enabled: boolean | null
          user_id: number | null
        }
        Insert: {
          account_id?: string | null
          charges_enabled?: boolean | null
          created_at?: string | null
          details_submitted?: boolean | null
          id?: number | null
          payouts_enabled?: boolean | null
          user_id?: number | null
        }
        Update: {
          account_id?: string | null
          charges_enabled?: boolean | null
          created_at?: string | null
          details_submitted?: boolean | null
          id?: number | null
          payouts_enabled?: boolean | null
          user_id?: number | null
        }
        Relationships: []
      }
      subscription_records: {
        Row: {
          created_at: string
          id: string
          nowpayments_invoice_id: string | null
          payment_provider: string | null
          plan_type: string
          purchased_at: string
          status: string
          stripe_session_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id: string
          nowpayments_invoice_id?: string | null
          payment_provider?: string | null
          plan_type?: string
          purchased_at?: string
          status?: string
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          nowpayments_invoice_id?: string | null
          payment_provider?: string | null
          plan_type?: string
          purchased_at?: string
          status?: string
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_records_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      users: {
        Row: {
          account_id: string | null
          business_category: string | null
          created_at: string | null
          email: string | null
          estimated_volume_usd: number | null
          full_name: string | null
          gateway_use_description: string | null
          is_admin: boolean | null
          nationality: string | null
          notes: string | null
          password_hash: string | null
          phone_number: string | null
          product_description: string | null
          status: string | null
          stripe_account_id: string | null
          stripe_url: string | null
          subscription_status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          account_id?: string | null
          business_category?: string | null
          created_at?: string | null
          email?: string | null
          estimated_volume_usd?: number | null
          full_name?: string | null
          gateway_use_description?: string | null
          is_admin?: boolean | null
          nationality?: string | null
          notes?: string | null
          password_hash?: string | null
          phone_number?: string | null
          product_description?: string | null
          status?: string | null
          stripe_account_id?: string | null
          stripe_url?: string | null
          subscription_status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          account_id?: string | null
          business_category?: string | null
          created_at?: string | null
          email?: string | null
          estimated_volume_usd?: number | null
          full_name?: string | null
          gateway_use_description?: string | null
          is_admin?: boolean | null
          nationality?: string | null
          notes?: string | null
          password_hash?: string | null
          phone_number?: string | null
          product_description?: string | null
          status?: string | null
          stripe_account_id?: string | null
          stripe_url?: string | null
          subscription_status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_current_user_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
