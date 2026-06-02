## Add Enamad Trust Seal to Footer

Add the Enamad logo as a clickable trust seal in the footer, linking to the verification URL.

### Steps

1. Upload the Enamad image as a Lovable asset (`src/assets/enamad.png.asset.json`) from the user-uploaded file.
2. Update `src/components/Footer.tsx`:
   - Import the asset.
   - Add a new "Trust Seal" / certification block in the Legal column (below the social links), containing an `<a>` tag wrapping the Enamad `<img>`.
   - Link target: `https://trustseal.enamad.ir/?id=657703&code=null`
   - Open in new tab (`target="_blank"`, `rel="noopener noreferrer"`).
   - Add `referrerPolicy="origin"` (standard Enamad requirement).
   - Use proper alt text and a fixed width (~80px) so it looks balanced in the footer.
   - Respect RTL alignment using the existing `isRTL` flag.

### Notes
- Restores the previously-removed Enamad seal (per footer memory) with the new ID 657703.
- No business logic changes; purely a presentation addition to the footer.
