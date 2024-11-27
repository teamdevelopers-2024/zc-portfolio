type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "ZEECODE",
    fullName: "John Doe",
    email: "johndoe@mail.com",
  },
  hero: {
    name: "John Doe",
    p: ["I develop 3D visuals, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Empowering Innovation with Cutting-Edge Technology.",
      content: `At Zeecode Solution, we specialize in providing state-of-the-art software development services that drive digital transformation and empower businesses to succeed in an ever-evolving technological landscape. With a team of skilled developers and a passion for innovation, we create scalable, efficient, and user-centric solutions tailored to meet the unique needs of each client.`,
    },
    experience: {
      p: "What We have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Our work",
      h2: "Projects.",
      content: `Our projects reflect the expertise in delivery of leading-edge solutions.

In the following, we demonstrate Zeecode Solution's capabilities to produce innovative and impactful results. Each project is a testimony that we are specialized in solving the most complex business challenges by making complete use of numerous technologies and managing the end-to-end development of projects. We excel at producing scalable, user-centric solutions that meet specific client needs.

We provide detailed descriptions, besides linking relevant code repositories, where possible, and live demos for every project, which indicates the quality and reliability of our work.`,
    },
  },
};
