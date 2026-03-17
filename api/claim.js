export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      type: "action",
      icon: "https://placehold.co/200x200",
      title: "TEFT Experiment",
      description: "Do not tell anyone what happens.",
      label: "Enter experiment",
      links: {
        actions: [
          {
            label: "Enter experiment",
            href: "/api/claim?step=1"
          }
        ]
      }
    });
  }

  if (req.method === "POST") {
    const step = req.query.step || "1";

    if (step === "1") {
      return res.status(200).json({
        type: "action",
        icon: "https://placehold.co/200x200",
        title: "TEFT Experiment",
        description: "most people ignore this",
        label: "Continue",
        links: {
          actions: [
            {
              label: "Continue",
              href: "/api/claim?step=2"
            },
            {
              label: "Leave",
              href: "/api/claim?step=leave"
            }
          ]
        }
      });
    }

    if (step === "2") {
      return res.status(200).json({
        type: "completed",
        icon: "https://placehold.co/200x200",
        title: "TEFT Experiment",
        description: "You were not supposed to stay this long.",
        label: "Observed",
        message: "most people click once and leave."
      });
    }

    if (step === "leave") {
      return res.status(200).json({
        type: "completed",
        icon: "https://placehold.co/200x200",
        title: "TEFT Experiment",
        description: "most people ignore this",
        label: "Left",
        message: "You did what most people do."
      });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
