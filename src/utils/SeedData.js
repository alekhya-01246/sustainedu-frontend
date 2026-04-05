// src/utils/SeedData.js

export function seedSampleData() {
  const alreadySeeded = localStorage.getItem("sampleDataSeeded");
  if (alreadySeeded) return; // prevent duplicate seeding

  const sampleLessons = [
    {
      id: Date.now() + 1,
      title: "Waste Reduction Basics",
      description:
        "Learn simple ways to reduce waste and adopt sustainable lifestyle habits.",
      duration: "10 minutes",
    },
    {
      id: Date.now() + 2,
      title: "Water Conservation Techniques",
      description:
        "Understand how to save water in daily activities with simple actions.",
      duration: "15 minutes",
    },
    {
      id: Date.now() + 3,
      title: "Understanding Renewable Energy",
      description:
        "A beginner-friendly introduction to solar, wind and hydro power.",
      duration: "20 minutes",
    },
  ];

  const sampleProjects = [
    {
      id: Date.now() + 11,
      title: "Home Composting Project",
      description:
        "Create a compost bin using kitchen waste to understand natural decomposition.",
      difficulty: "Beginner",
    },
    {
      id: Date.now() + 12,
      title: "Plastic-Free Week Challenge",
      description:
        "Go one week without using single-use plastics and track your progress.",
      difficulty: "Intermediate",
    },
    {
      id: Date.now() + 13,
      title: "Rainwater Harvesting Model",
      description:
        "Build a mini harvesting model to learn water conservation principles.",
      difficulty: "Advanced",
    },
  ];

  // Save to localStorage ONLY IF empty
  if (!localStorage.getItem("lessons")) {
    localStorage.setItem("lessons", JSON.stringify(sampleLessons));
  }

  if (!localStorage.getItem("projects")) {
    localStorage.setItem("projects", JSON.stringify(sampleProjects));
  }

  // Mark as seeded
  localStorage.setItem("sampleDataSeeded", "true");
}
