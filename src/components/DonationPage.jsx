export default function DonationPage({
  goFundMeUrl = "https://www.gofundme.com/f/support-project-drugfree20",
  accountNumber = "1444117918",
  bankName = "Access Bank",
  accountName = "Ferdinand Pascal",
  onBack = () => { },
}) {
  return (
    <div className="page-enter" style={{ padding: "4rem" }}>
      <div
        style={{
          background: "linear-gradient(135deg, rgba(45,80,22,0.4), rgba(22,34,8,0.95))",
          border: "1px solid rgba(94,158,47,0.25)",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
          color: "var(--cream)",
        }}
      >
        <h2 style={{ marginBottom: "0.75rem" }}>Support DrugFree'20</h2>
        <p style={{ color: "rgba(245,240,232,0.8)", marginBottom: "1.25rem" }}>
          Thank you for your interest in supporting our outreach, rehabilitation, and awareness work. Choose one of the options below to donate and help save lives.
        </p>

        <a
          href={goFundMeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: "inline-block", marginBottom: "1rem" }}
        >
          Donate via GoFundMe
        </a>

        <div
          style={{
            background: "rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "1rem",
            marginTop: "1.25rem",
          }}
        >
          <h3 style={{ margin: "0 0 0.5rem" }}>Bank Transfer</h3>
          <p style={{ margin: "0.2rem 0" }}><strong>Bank:</strong> {bankName}</p>
          <p style={{ margin: "0.2rem 0" }}><strong>Account name:</strong> {accountName}</p>
          <p style={{ margin: "0.2rem 0" }}><strong>Account number:</strong> {accountNumber}</p>
        </div>

        <button
          className="btn-outline"
          onClick={onBack}
          style={{ marginTop: "1.5rem" }}
        >
          Back to Programs
        </button>
      </div>
    </div>
  );
}
