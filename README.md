# SME Power Reliability Desk

A deployable static website for **SME Power Reliability Desk**, positioned as a reliable-power infrastructure service for Nigerian SMEs and institutions.

## Included files

- `index.html` — full one-page website
- `styles.css` — responsive premium infrastructure design
- `script.js` — calculator, mobile navigation, and local intake form success state
- `vercel.json` — static deployment settings
- `package.json` — project metadata and validation script
- `.gitignore` — common local/deployment files

## Main features

- Premium hero section and business-continuity doctrine
- Problem section framing unreliable power as business interruption
- Full operating chain: Audit → Load Mapping → Design → Financing Support → Installation Coordination → Monitoring → Maintenance → Report
- Five service package cards
- SME Power Reliability Report section
- Minimum viable business growth path
- Power loss calculator
- Reliability dashboard mock
- Trust architecture section
- Compliance awareness section
- Revenue model section
- Intake form with local browser storage

## Deploy to Vercel

1. Upload this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Select **Other** as the framework preset.
4. Leave build command empty, or use `npm run build` if Vercel asks.
5. Deploy.

No backend is included yet. The intake form stores submissions only in the visitor's browser local storage.

## Recommended next backend step

Add a database-backed intake system with:

- customer submission storage
- admin dashboard
- audit report generator
- power loss estimate history
- lead status tracking
- technician assignment log
- maintenance schedule records
- payment status records
