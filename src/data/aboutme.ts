export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "M. Murat Ardag",
  title: "Ph.D.",
  institution: " ",
  // Note that links work in the description
  description:
    "This is the landing page of my personal websites. The following links provide information about my different roles.<br>My professional journey led me to the intersection of <a href=https://mmuratardag.github.io/data_science_website target=_blank>data science</a>, <a href=https://mmuratardag.github.io/cybersecurity_website target=_blank>cybersecurity</a>, and <a href=https://mmuratardag.github.io/academic_website target=_blank>academia</a>.",
  email: "email@smmuratardag.net",
  imageUrl:
    "https://mmuratardag.github.io/academic_website/ws_img/mma_c_gp.jpg",
  // googleScholarUrl: "https://scholar.google.com/citations?user=6MoKqzkAAAAJ&hl=en",
  // githubUsername: "mmuratardag",
  // linkedinUsername: "mmuratardag",
  // twitterUsername: "mmuratardag",
  // blogUrl: "",
  // cvUrl: "",
  // institutionUrl: "",
  // altName: "",
  // secretDescription: "testing if I like this template as a landing page for multiple websites",
};
