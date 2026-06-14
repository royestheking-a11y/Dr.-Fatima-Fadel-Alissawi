export type TranslationKey = 
  | "hero.badge" | "hero.firstName" | "hero.lastName" | "hero.description" | "hero.button" | "hero.tag1" | "hero.tag2" | "hero.focus" | "hero.role" | "hero.scroll"
  | "about.badge" | "about.title1" | "about.title2" | "about.title3" | "about.desc" | "about.timeline.1.year" | "about.timeline.1.title" | "about.timeline.1.desc" | "about.timeline.2.year" | "about.timeline.2.title" | "about.timeline.2.desc" | "about.timeline.3.year" | "about.timeline.3.title" | "about.timeline.3.desc" | "about.timeline.4.year" | "about.timeline.4.title" | "about.timeline.4.desc" | "about.timeline.5.year" | "about.timeline.5.title" | "about.timeline.5.desc" | "about.timeline.6.year" | "about.timeline.6.title" | "about.timeline.6.desc"
  | "expertise.title1" | "expertise.title2" | "expertise.desc" | "expertise.nodes.center" | "expertise.nodes.1" | "expertise.nodes.2" | "expertise.nodes.3" | "expertise.nodes.4" | "expertise.nodes.5" | "expertise.nodes.6" | "expertise.nodes.7" | "expertise.nodes.8"
  | "academy.badge" | "academy.title1" | "academy.title2" | "academy.desc" | "academy.features.1.title" | "academy.features.1.desc" | "academy.features.2.title" | "academy.features.2.desc" | "academy.features.3.title" | "academy.features.3.desc" | "academy.features.4.title" | "academy.features.4.desc"
  | "researchLab.title1" | "researchLab.title2" | "researchLab.desc" | "researchLab.card.badge" | "researchLab.card.hover" | "researchLab.card.abstract" | "researchLab.card.read" | "researchLab.card.download" | "researchLab.papers.1.title" | "researchLab.papers.1.journal" | "researchLab.papers.1.volume" | "researchLab.papers.1.date" | "researchLab.papers.1.abstract" | "researchLab.papers.2.title" | "researchLab.papers.2.journal" | "researchLab.papers.2.date" | "researchLab.papers.2.abstract"
  | "researchNetwork.title1" | "researchNetwork.title2" | "researchNetwork.desc" | "researchNetwork.nodes.center" | "researchNetwork.nodes.1" | "researchNetwork.nodes.2" | "researchNetwork.nodes.3" | "researchNetwork.nodes.4" | "researchNetwork.nodes.5" | "researchNetwork.nodes.6"
  | "awards.title1" | "awards.title2" | "awards.1.title" | "awards.1.issuer" | "awards.1.event" | "awards.1.desc" | "awards.2.title" | "awards.2.issuer" | "awards.2.desc" | "awards.3.title" | "awards.3.issuer" | "awards.3.desc"
  | "symbolExplorer.title1" | "symbolExplorer.title2" | "symbolExplorer.desc" | "symbolExplorer.analysis" | "symbolExplorer.symbol" | "symbolExplorer.viewRefs" | "symbolExplorer.symbols.1.name" | "symbolExplorer.symbols.1.cat" | "symbolExplorer.symbols.1.meaning" | "symbolExplorer.symbols.2.name" | "symbolExplorer.symbols.2.cat" | "symbolExplorer.symbols.2.meaning" | "symbolExplorer.symbols.3.name" | "symbolExplorer.symbols.3.cat" | "symbolExplorer.symbols.3.meaning" | "symbolExplorer.symbols.4.name" | "symbolExplorer.symbols.4.cat" | "symbolExplorer.symbols.4.meaning" | "symbolExplorer.symbols.5.name" | "symbolExplorer.symbols.5.cat" | "symbolExplorer.symbols.5.meaning" | "symbolExplorer.symbols.6.name" | "symbolExplorer.symbols.6.cat" | "symbolExplorer.symbols.6.meaning"
  | "certificates.title1" | "certificates.title2" | "certificates.cat.all" | "certificates.cat.academic" | "certificates.cat.leadership" | "certificates.cat.diplomacy" | "certificates.cat.human" | "certificates.cat.education" | "certificates.1.title" | "certificates.1.issuer" | "certificates.1.cat" | "certificates.2.title" | "certificates.2.issuer" | "certificates.2.cat" | "certificates.3.title" | "certificates.3.issuer" | "certificates.3.cat" | "certificates.4.title" | "certificates.4.issuer" | "certificates.4.cat" | "certificates.5.title" | "certificates.5.issuer" | "certificates.5.cat" | "certificates.6.title" | "certificates.6.issuer" | "certificates.6.cat" | "certificates.7.title" | "certificates.7.issuer" | "certificates.7.cat" | "certificates.8.title" | "certificates.8.issuer" | "certificates.8.cat" | "certificates.9.title" | "certificates.9.issuer" | "certificates.9.cat" | "certificates.10.title" | "certificates.10.issuer" | "certificates.10.cat"
  | "experience.badge" | "experience.title1" | "experience.title2" | "experience.1.role" | "experience.1.location" | "experience.1.period" | "experience.1.desc" | "experience.2.role" | "experience.2.location" | "experience.2.period" | "experience.2.desc" | "experience.3.role" | "experience.3.location" | "experience.3.period" | "experience.3.desc" | "experience.4.role" | "experience.4.location" | "experience.4.period" | "experience.4.desc" | "experience.5.role" | "experience.5.location" | "experience.5.period" | "experience.5.desc" | "experience.6.role" | "experience.6.location" | "experience.6.period" | "experience.6.desc"
  | "contact.title1" | "contact.title2" | "contact.desc" | "contact.info" | "contact.email" | "contact.phone" | "contact.location" | "contact.country" | "contact.firstName" | "contact.lastName" | "contact.emailAddress" | "contact.message" | "contact.send"
  | "footer.text"
  // Allow any string to act as key to bypass strict typing issues easily while deep nesting
  | string;

export const translations: Record<string, any> = {
  en: {
    hero: {
      badge: "Premium Academic Portfolio",
      firstName: "Dr. Fatima Fadel",
      lastName: "Alissawi",
      description: "Pioneering the intersection of Islamic Semiotics, Qur'anic Symbolism, and Manuscript Studies to decode the languages of the past.",
      button: "Explore Research",
      tag1: "Semiotics",
      tag2: "Education",
      focus: "Current Focus",
      role: "Director of the First Arab Academy For Symbols",
      scroll: "Scroll"
    },
    about: {
      badge: "The Academic Journey",
      title1: "Bridging",
      title2: "Sociology &",
      title3: "Symbolism",
      desc: "With a multidisciplinary foundation spanning Sociology, Islamic Studies, and Education, my research decodes the profound semiotics embedded in religious texts and cultural artifacts.",
      timeline: {
        "1": { year: "2014", title: "Sociology Foundation", desc: "Bachelor's Degree from the University of Damascus, Syria, establishing the core understanding of societal structures." },
        "2": { year: "2020", title: "International Affairs", desc: "Diploma from the Syrian International Academy, researching interpretation in political discourse." },
        "3": { year: "2022", title: "Islamic Semiotics", desc: "Master's Degree at Al-Imam Al-Awzai University. Thesis focused on The Symbolic Method in the Holy Qur'an." },
        "4": { year: "2024", title: "Pedagogical Leadership", desc: "Began shaping young minds as a Social & Moral Education Teacher in UAE schools." },
        "5": { year: "2025", title: "Educational Qualification", desc: "Advanced diploma at City University, Ajman, bridging academic theory with classroom methodology." },
        "6": { year: "2026", title: "PhD Candidacy", desc: "Currently authoring a dissertation on Leadership Values in Qur'anic Stories at Al-Imam Al-Awzai University." }
      }
    },
    expertise: {
      title1: "Academic",
      title2: "Expertise",
      desc: "A constellation of interconnected disciplines centered around the profound study of signs, symbols, and meaning.",
      nodes: {
        center: "Symbolism",
        "1": "Semiotics",
        "2": "Interpretation Science",
        "3": "Semantics",
        "4": "Cryptography",
        "5": "Manuscript Studies",
        "6": "Research Writing",
        "7": "Arabic Shorthand",
        "8": "Qur'anic Symbolism"
      }
    },
    academy: {
      badge: "Institutional Vision",
      title1: "First Arab Academy For",
      title2: "Symbols",
      desc: "Pioneering the formal, academic study of symbolism in the Arab world. A premier institution dedicated to unlocking the codes of the past to understand the sociology of the present.",
      features: {
        "1": { title: "Research-Based Education", desc: "Curricula built strictly on peer-reviewed research and historical manuscript analysis." },
        "2": { title: "Arabic & English Learning", desc: "Bilingual approach ensuring broader accessibility while preserving the richness of Arabic semiotics." },
        "3": { title: "Expert-Led Lectures", desc: "Interactive sessions with leading scholars in sociology, theology, and linguistics." },
        "4": { title: "Neutral Academic Approach", desc: "Objective, scientific analysis of symbols devoid of ideological bias." }
      }
    },
    researchLab: {
      title1: "Research",
      title2: "Laboratory",
      desc: "Pioneering academic publications at the intersection of semiotics, sociology, and education.",
      viewAll: "View All Research",
      card: {
        badge: "Featured Publication",
        hover: "Hover for Abstract",
        abstract: "Abstract",
        read: "Read Paper",
        download: "Download PDF"
      },
      papers: {
        "1": { title: "The Impact of Religious Symbols on Social Cohesion", journal: "Rimak Journal International Journal of Humanities and Social Sciences", volume: "Volume 8, Issue 3", date: "May 2026", abstract: "This paper explores how deeply embedded religious symbols act as a unifying force within diverse communities, decoding the semiotics of shared rituals and their impact on societal bonds." },
        "2": { title: "The Effectiveness of a Symbols-and-Icons Strategy Based on the Musical Scale in Teaching Arabic Language to Primary Education Students", journal: "Proceedings of the 11th Arabic Language Conference, Dubai", date: "2025", abstract: "An innovative pedagogical approach utilizing musical scale mapping and visual iconography to enhance the cognitive retention and engagement of primary students learning Arabic." }
      }
    },
    researchNetwork: {
      title1: "Research",
      title2: "Network",
      desc: "A multidisciplinary approach connecting diverse fields of study to uncover the profound depths of symbolism.",
      nodes: {
        center: "Dr. Fatima",
        "1": "Islamic Studies",
        "2": "Leadership",
        "3": "Sociology",
        "4": "Education",
        "5": "Semiotics",
        "6": "Arabic Language"
      }
    },
    awards: {
      title1: "Awards &",
      title2: "Recognition",
      "1": { title: "Distinguished Scientific Research Certificate", issuer: "H.H. Sheikh Mohammed bin Rashid Al Maktoum", event: "11th Arabic Language Conference, Dubai", desc: "For the research: The Effectiveness of Using Symbols and Icons on the Musical Scale in Teaching Arabic to Primary Students" },
      "2": { title: `"You Are the Power of Influence" Award`, issuer: "Arabia That Knows No Impossible Conference", desc: "Recognizing profound impact and inspirational leadership in the fields of education and sociology." },
      "3": { title: "Scientific Medal", issuer: "3rd Dubai International Conference on Social and Human Sciences", desc: "For the research: The Impact of Religious Symbols on Social Cohesion" }
    },
    symbolExplorer: {
      title1: "Symbol",
      title2: "Explorer",
      desc: "An interactive archive decoding the semiotic significance of historical and religious symbols.",
      analysis: "Semantic Analysis",
      symbol: "Symbol",
      viewRefs: "View Academic References",
      symbols: {
        "1": { name: "Nun", cat: "Linguistic", meaning: "Often associated with the inkwell, light, and the eternal covenant in Islamic semiotics." },
        "2": { name: "Divine Name", cat: "Religious", meaning: "The supreme symbol of unity, existence, and the ultimate referent in all symbolic systems." },
        "3": { name: "Sajdah", cat: "Qur'anic", meaning: "A symbol indicating prostration, representing ultimate submission and humility." },
        "4": { name: "Ayah End", cat: "Manuscript", meaning: "Denotes the end of a verse, historically varying in decoration to reflect the era of the manuscript." },
        "5": { name: "Qaf", cat: "Linguistic", meaning: "Symbolizes the cosmological mountain Qaf, representing the boundary of the known world." },
        "6": { name: "Meem", cat: "Linguistic", meaning: "Associated with the Prophet Muhammad and the concept of a completed cycle or totality." }
      }
    },
    certificates: {
      title1: "Academic",
      title2: "Vault",
      cat: { all: "All", academic: "Academic", leadership: "Leadership", diplomacy: "Diplomacy", human: "Human Development", education: "Education" },
      "1": { title: "Diploma in School Leadership", issuer: "Knowledge Academy", cat: "Leadership" },
      "2": { title: "Diploma in International Relations and Diplomacy", issuer: "German International Organization", cat: "Diplomacy" },
      "3": { title: "Diploma in NLP", issuer: "International Human Development Center", cat: "Human Development" },
      "4": { title: "Peace Ambassadors Standards", issuer: "Global Peace & Prosperity Conference, Lebanon", cat: "Diplomacy" },
      "5": { title: "Social Counselor Diploma", issuer: "Positive Syrians Foundation", cat: "Human Development" },
      "6": { title: "Human Resources Management", issuer: "Advanced Training Company, Damascus", cat: "Leadership" },
      "7": { title: "Training of Trainers (TOT)", issuer: "International Human Development Center", cat: "Education" },
      "8": { title: "Sharia Arbitration in Marital Disputes", issuer: "Efaf Association, Damascus", cat: "Academic" },
      "9": { title: "Scientific Research Skills", issuer: "Al-Hakeem Center, Damascus", cat: "Academic" },
      "10": { title: "Qur'anic Rhetoric Course", issuer: "Ahmed Kuftaro Complex, Damascus", cat: "Academic" }
    },
    experience: {
      badge: "Career History",
      title1: "Professional",
      title2: "Experience",
      "1": { role: "Social, National, and Moral Education Teacher", location: "UAE", period: "2024 – Present", desc: "Educating the next generation on moral values, national identity, and social cohesion." },
      "2": { role: "Islamic Studies Teacher", location: "UAE Schools", period: "2023", desc: "Guiding students through the intricate teachings of Islamic studies." },
      "3": { role: "University Lecturer", location: "Al-Rasheed International Private University", period: "Past", desc: "Taught Philosophy of Art, Sociology, and Research Methodology." },
      "4": { role: "Lecturer (Online)", location: "Ta'allam Academy, Saudi Arabia", period: "2023", desc: "Course: Foundations of Mental Health." },
      "5": { role: "Social Researcher", location: "Ministry of Information, Damascus", period: "Contract", desc: "Conducted social research within the Development Media Department." },
      "6": { role: "Educational Supervisor", location: "Al-Sayyida Safiya Islamic School, Damascus", period: "Past", desc: "Oversaw educational programs and supervised teaching staff." }
    },
    contact: {
      title1: "Academic",
      title2: "Inquiries",
      desc: "For research collaborations, speaking engagements, and academic consultations.",
      info: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      country: "United Arab Emirates",
      firstName: "First Name",
      lastName: "Last Name",
      emailAddress: "Email Address",
      message: "Message",
      send: "Send Message"
    },
    academyDetails: {
      back: "Back to Academy",
      "research-based-education": {
        title: "Research-Based Education",
        subtitle: "Curricula built strictly on peer-reviewed research and historical manuscript analysis.",
        content: [
          "At the First Arab Academy For Symbols, our foundation is built upon rigorous, evidence-based academic research. Every course module is meticulously designed using peer-reviewed papers, primary historical sources, and direct manuscript analysis.",
          "We reject conjecture, ensuring our students receive an education that meets the highest standards of international sociological and semiotic studies. By focusing on primary texts and historical context, we train students to approach symbols with a critical, analytical eye.",
          "Our research database includes thousands of digitized manuscripts, allowing students hands-on experience in decoding semiotic significance across different eras of Islamic and Arab history."
        ]
      },
      "arabic-english-learning": {
        title: "Arabic & English Learning",
        subtitle: "Bilingual approach ensuring broader accessibility while preserving the richness of Arabic semiotics.",
        content: [
          "Understanding that semiotics transcends borders, our Academy champions a bilingual educational model. By offering courses in both Arabic and English, we preserve the nuanced linguistic heritage of Arabic symbolic texts while ensuring our research reaches a global academic audience.",
          "This dual approach fosters cross-cultural dialogue and enriches the comparative study of symbols. Students learn not only to translate the words, but to translate the cultural and historical weight of the symbols themselves.",
          "We bridge the gap between Western sociology and Eastern theology, creating a unified language of academic inquiry that prepares our graduates for international research opportunities."
        ]
      },
      "expert-led-lectures": {
        title: "Expert-Led Lectures",
        subtitle: "Interactive sessions with leading scholars in sociology, theology, and linguistics.",
        content: [
          "Our faculty comprises distinguished voices from the fields of sociology, theology, linguistics, and history. Students do not just passively learn; they engage in dynamic, interactive seminars with world-renowned experts.",
          "These direct mentorship opportunities allow for deep-dive discussions into complex semiotic frameworks, fostering the next generation of thought leaders. Guest lecturers from leading global universities frequently host specialized workshops.",
          "We believe that true academic growth happens in the crucible of debate and discussion. Our small-cohort seminar style ensures every student receives personalized guidance from leading academics."
        ]
      },
      "neutral-academic-approach": {
        title: "Neutral Academic Approach",
        subtitle: "Objective, scientific analysis of symbols devoid of ideological bias.",
        content: [
          "The study of religious and cultural symbols often falls prey to ideological subjectivity. The Academy strictly enforces a neutral, scientific approach to semiotics. We examine symbols as historical and sociological data points, decoding their evolutionary meaning without bias.",
          "This commitment to academic objectivity is what sets our research and publications apart globally. Students are trained to separate personal belief from academic analysis, utilizing rigorous sociological frameworks.",
          "Our graduates emerge as objective scholars, capable of producing research that is respected and published across diverse global institutions, regardless of cultural or ideological backgrounds."
        ]
      }
    },
    footer: {
      text: "Dr. Fatima Fadel Alissawi. All Rights Reserved."
    }
  },
  ar: {
    hero: {
      badge: "بورتفوليو أكاديمي متميز",
      firstName: "د. فاطمة فاضل",
      lastName: "العيساوي",
      description: "رائدة في تقاطع السيميائية الإسلامية، والرمزية القرآنية، ودراسات المخطوطات لفك شفرات لغات الماضي.",
      button: "استكشف الأبحاث",
      tag1: "السيميائية",
      tag2: "التعليم",
      focus: "التركيز الحالي",
      role: "مديرة أول أكاديمية عربية للرموز",
      scroll: "تمرير"
    },
    about: {
      badge: "الرحلة الأكاديمية",
      title1: "الربط بين",
      title2: "علم الاجتماع و",
      title3: "الرمزية",
      desc: "بأساس متعدد التخصصات يشمل علم الاجتماع والدراسات الإسلامية والتعليم، تفك أبحاثي شفرة السيميائية العميقة المتأصلة في النصوص الدينية والآثار الثقافية.",
      timeline: {
        "1": { year: "2014", title: "التأسيس في علم الاجتماع", desc: "درجة البكالوريوس من جامعة دمشق، سوريا، لتأسيس الفهم الأساسي للهياكل المجتمعية." },
        "2": { year: "2020", title: "الشؤون الدولية", desc: "دبلوم من الأكاديمية السورية الدولية، وبحث في التفسير في الخطاب السياسي." },
        "3": { year: "2022", title: "السيميائية الإسلامية", desc: "درجة الماجستير من جامعة الإمام الأوزاعي. ركزت الرسالة على الأسلوب الرمزي في القرآن الكريم." },
        "4": { year: "2024", title: "القيادة التربوية", desc: "بدأت في تشكيل العقول الشابة كمعلمة للتربية الأخلاقية والاجتماعية في مدارس الإمارات العربية المتحدة." },
        "5": { year: "2025", title: "التأهيل التربوي", desc: "دبلوم متقدم من سيتي يونيفرسيتي عجمان، يربط بين النظرية الأكاديمية ومنهجية الفصول الدراسية." },
        "6": { year: "2026", title: "ترشيح الدكتوراه", desc: "أعكف حالياً على تأليف أطروحة حول القيم القيادية في القصص القرآني في جامعة الإمام الأوزاعي." }
      }
    },
    expertise: {
      title1: "الخبرة",
      title2: "الأكاديمية",
      desc: "مجموعة من التخصصات المترابطة التي تتمحور حول الدراسة العميقة للعلامات والرموز والمعاني.",
      nodes: {
        center: "الرمزية",
        "1": "السيميائية",
        "2": "علم التفسير",
        "3": "علم الدلالة",
        "4": "علم التعمية (التشفير)",
        "5": "دراسات المخطوطات",
        "6": "الكتابة البحثية",
        "7": "الاختزال العربي",
        "8": "الرمزية القرآنية"
      }
    },
    academy: {
      badge: "الرؤية المؤسسية",
      title1: "أول أكاديمية عربية",
      title2: "للرموز",
      desc: "رائدة الدراسة الأكاديمية الرسمية للرمزية في العالم العربي. مؤسسة رائدة مكرسة لفك شفرات الماضي لفهم علم اجتماع الحاضر.",
      features: {
        "1": { title: "التعليم القائم على البحث", desc: "مناهج مبنية بدقة على أبحاث محكمة وتحليل المخطوطات التاريخية." },
        "2": { title: "التعلم بالعربية والإنجليزية", desc: "نهج ثنائي اللغة يضمن وصولاً أوسع مع الحفاظ على ثراء السيميائية العربية." },
        "3": { title: "محاضرات بقيادة خبراء", desc: "جلسات تفاعلية مع كبار العلماء في علم الاجتماع وعلم الكلام واللغويات." },
        "4": { title: "نهج أكاديمي محايد", desc: "تحليل علمي موضوعي للرموز خالٍ من التحيز الأيديولوجي." }
      }
    },
    researchLab: {
      title1: "مختبر",
      title2: "الأبحاث",
      desc: "منشورات أكاديمية رائدة في تقاطع السيميائية وعلم الاجتماع والتعليم.",
      viewAll: "عرض جميع الأبحاث",
      card: {
        badge: "منشور مميز",
        hover: "مرر الماوس لقراءة الملخص",
        abstract: "الملخص",
        read: "قراءة الورقة البحثية",
        download: "تنزيل PDF"
      },
      papers: {
        "1": { title: "أثر الرموز الدينية في التماسك الاجتماعي", journal: "مجلة رماح الدولية للعلوم الإنسانية والاجتماعية", volume: "المجلد 8، الإصدار 3", date: "مايو 2026", abstract: "تستكشف هذه الورقة البحثية كيف تعمل الرموز الدينية المتجذرة بعمق كقوة موحدة داخل المجتمعات المتنوعة، وتفك شفرة السيميائية للطقوس المشتركة وتأثيرها على الروابط المجتمعية." },
        "2": { title: "فاعلية توظيف استراتيجية الرموز والأيقونات على السلم الموسيقي في تعليم اللغة العربية لطلبة المرحلة الابتدائية", journal: "وقائع مؤتمر اللغة العربية الحادي عشر، دبي", date: "2025", abstract: "نهج تربوي مبتكر يستخدم تخطيط السلم الموسيقي والأيقونات المرئية لتعزيز الاحتفاظ المعرفي والمشاركة لدى طلاب المرحلة الابتدائية في تعلم اللغة العربية." }
      }
    },
    researchNetwork: {
      title1: "شبكة",
      title2: "الأبحاث",
      desc: "نهج متعدد التخصصات يربط بين مجالات دراسية متنوعة للكشف عن الأعماق العميقة للرمزية.",
      nodes: {
        center: "د. فاطمة",
        "1": "الدراسات الإسلامية",
        "2": "القيادة",
        "3": "علم الاجتماع",
        "4": "التعليم",
        "5": "السيميائية",
        "6": "اللغة العربية"
      }
    },
    awards: {
      title1: "الجوائز",
      title2: "والتقدير",
      "1": { title: "شهادة البحث العلمي المتميز", issuer: "صاحب السمو الشيخ محمد بن راشد آل مكتوم", event: "مؤتمر اللغة العربية الحادي عشر، دبي", desc: "عن بحث: فاعلية توظيف الرموز والأيقونات على السلم الموسيقي في تعليم اللغة العربية لطلبة المرحلة الابتدائية" },
      "2": { title: "جائزة «أنت قوة التأثير»", issuer: "مؤتمر عربية لا تعرف المستحيل", desc: "تقديراً للتأثير العميق والقيادة الملهمة في مجالي التعليم وعلم الاجتماع." },
      "3": { title: "الميدالية العلمية", issuer: "مؤتمر دبي الدولي الثالث للعلوم الاجتماعية والإنسانية", desc: "عن بحث: أثر الرموز الدينية في التماسك الاجتماعي" }
    },
    symbolExplorer: {
      title1: "مستكشف",
      title2: "الرموز",
      desc: "أرشيف تفاعلي يفك شفرة الأهمية السيميائية للرموز التاريخية والدينية.",
      analysis: "التحليل الدلالي",
      symbol: "رمز",
      viewRefs: "عرض المراجع الأكاديمية",
      symbols: {
        "1": { name: "النون", cat: "لغوي", meaning: "غالباً ما ترتبط بالدواة والنور والعهد الأبدي في السيميائية الإسلامية." },
        "2": { name: "اسم الجلالة", cat: "ديني", meaning: "الرمز الأسمى للوحدة والوجود والمرجع النهائي في جميع الأنظمة الرمزية." },
        "3": { name: "سجدة", cat: "قرآني", meaning: "رمز يشير إلى السجود، ويمثل الخضوع التام والتواضع." },
        "4": { name: "نهاية الآية", cat: "مخطوطة", meaning: "يدل على نهاية الآية، ويختلف تاريخياً في الزخرفة ليعكس العصر الذي كُتبت فيه المخطوطة." },
        "5": { name: "القاف", cat: "لغوي", meaning: "ترمز إلى جبل قاف الكوني، الذي يمثل حدود العالم المعروف." },
        "6": { name: "الميم", cat: "لغوي", meaning: "ترتبط بالنبي محمد ومفهوم الدورة المكتملة أو الشمولية." }
      }
    },
    certificates: {
      title1: "الرصيد",
      title2: "الأكاديمي",
      cat: { all: "الكل", academic: "أكاديمي", leadership: "القيادة", diplomacy: "الدبلوماسية", human: "التنمية البشرية", education: "التعليم" },
      "1": { title: "دبلوم في القيادة المدرسية", issuer: "أكاديمية المعرفة", cat: "القيادة" },
      "2": { title: "دبلوم في العلاقات الدولية والدبلوماسية", issuer: "المنظمة الدولية الألمانية", cat: "الدبلوماسية" },
      "3": { title: "دبلوم في البرمجة اللغوية العصبية (NLP)", issuer: "المركز الدولي للتنمية البشرية", cat: "التنمية البشرية" },
      "4": { title: "معايير سفراء السلام", issuer: "مؤتمر السلام والازدهار العالمي، لبنان", cat: "الدبلوماسية" },
      "5": { title: "دبلوم مستشار اجتماعي", issuer: "مؤسسة سوريون إيجابيون", cat: "التنمية البشرية" },
      "6": { title: "إدارة الموارد البشرية", issuer: "شركة التدريب المتقدم، دمشق", cat: "القيادة" },
      "7": { title: "تدريب المدربين (TOT)", issuer: "المركز الدولي للتنمية البشرية", cat: "التعليم" },
      "8": { title: "التحكيم الشرعي في النزاعات الزوجية", issuer: "جمعية العفاف، دمشق", cat: "أكاديمي" },
      "9": { title: "مهارات البحث العلمي", issuer: "مركز الحكيم، دمشق", cat: "أكاديمي" },
      "10": { title: "دورة البلاغة القرآنية", issuer: "مجمع أحمد كفتارو، دمشق", cat: "أكاديمي" }
    },
    experience: {
      badge: "التاريخ المهني",
      title1: "الخبرة",
      title2: "المهنية",
      "1": { role: "معلمة التربية الأخلاقية والوطنية والاجتماعية", location: "الإمارات العربية المتحدة", period: "2024 - الحاضر", desc: "تثقيف الجيل القادم حول القيم الأخلاقية والهوية الوطنية والتماسك الاجتماعي." },
      "2": { role: "معلمة الدراسات الإسلامية", location: "مدارس الإمارات", period: "2023", desc: "توجيه الطلاب عبر التعاليم العميقة للدراسات الإسلامية." },
      "3": { role: "محاضِرة جامعية", location: "جامعة الرشيد الدولية الخاصة", period: "سابقاً", desc: "تدريس فلسفة الفن، وعلم الاجتماع، ومنهجية البحث." },
      "4": { role: "محاضِرة (عبر الإنترنت)", location: "أكاديمية تعلّم، المملكة العربية السعودية", period: "2023", desc: "دورة: أسس الصحة النفسية." },
      "5": { role: "باحثة اجتماعية", location: "وزارة الإعلام، دمشق", period: "عقد", desc: "إجراء أبحاث اجتماعية ضمن إدارة الإعلام التنموي." },
      "6": { role: "مشرفة تربوية", location: "مدرسة السيدة صفية الشرعية، دمشق", period: "سابقاً", desc: "الإشراف على البرامج التعليمية وتوجيه هيئة التدريس." }
    },
    contact: {
      title1: "الاستفسارات",
      title2: "الأكاديمية",
      desc: "للتعاون البحثي، والمشاركات الخطابية، والاستشارات الأكاديمية.",
      info: "معلومات التواصل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      country: "الإمارات العربية المتحدة",
      firstName: "الاسم الأول",
      lastName: "الاسم الأخير",
      emailAddress: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الرسالة"
    },
    academyDetails: {
      back: "العودة إلى الأكاديمية",
      "research-based-education": {
        title: "التعليم القائم على البحث",
        subtitle: "مناهج مبنية بدقة على أبحاث محكمة وتحليل المخطوطات التاريخية.",
        content: [
          "في أول أكاديمية عربية للرموز، يُبنى أساسنا على بحث أكاديمي صارم وقائم على الأدلة. تم تصميم كل وحدة دراسية بدقة باستخدام أوراق بحثية محكمة ومصادر تاريخية أولية وتحليل مباشر للمخطوطات.",
          "نرفض التخمين، ونضمن لطلابنا الحصول على تعليم يلبي أعلى معايير الدراسات الاجتماعية والسيميائية الدولية. من خلال التركيز على النصوص الأولية والسياق التاريخي، ندرب الطلاب على تناول الرموز بنظرة نقدية وتحليلية.",
          "تتضمن قاعدة بياناتنا البحثية آلاف المخطوطات الرقمية، مما يتيح للطلاب تجربة عملية في فك شفرات الأهمية السيميائية عبر عصور مختلفة من التاريخ الإسلامي والعربي."
        ]
      },
      "arabic-english-learning": {
        title: "التعلم بالعربية والإنجليزية",
        subtitle: "نهج ثنائي اللغة يضمن وصولاً أوسع مع الحفاظ على ثراء السيميائية العربية.",
        content: [
          "إدراكاً منا بأن السيميائية تتجاوز الحدود، تدعم أكاديميتنا نموذجاً تعليمياً ثنائي اللغة. من خلال تقديم دورات باللغتين العربية والإنجليزية، نحافظ على التراث اللغوي الدقيق للنصوص الرمزية العربية مع ضمان وصول أبحاثنا إلى جمهور أكاديمي عالمي.",
          "يعزز هذا النهج المزدوج الحوار بين الثقافات ويثري الدراسة المقارنة للرموز. لا يتعلم الطلاب ترجمة الكلمات فحسب، بل يترجمون الثقل الثقافي والتاريخي للرموز نفسها.",
          "نحن نسد الفجوة بين علم الاجتماع الغربي وعلم الكلام الشرقي، مما يخلق لغة موحدة للبحث الأكاديمي تهيئ خريجينا لفرص البحث الدولية."
        ]
      },
      "expert-led-lectures": {
        title: "محاضرات بقيادة خبراء",
        subtitle: "جلسات تفاعلية مع كبار العلماء في علم الاجتماع وعلم الكلام واللغويات.",
        content: [
          "تضم هيئة التدريس لدينا أصواتاً متميزة من مجالات علم الاجتماع وعلم الكلام واللغويات والتاريخ. لا يقتصر دور الطلاب على التعلم السلبي؛ بل يشاركون في ندوات ديناميكية وتفاعلية مع خبراء مشهورين عالمياً.",
          "تتيح فرص التوجيه المباشر هذه إجراء مناقشات متعمقة في الأطر السيميائية المعقدة، وتعزيز الجيل القادم من قادة الفكر. يستضيف المحاضرون الزوار من الجامعات العالمية الرائدة باستمرار ورش عمل متخصصة.",
          "نحن نؤمن بأن النمو الأكاديمي الحقيقي يحدث في بوتقة النقاش والحوار. يضمن أسلوب الندوات ذو المجموعات الصغيرة حصول كل طالب على إرشادات شخصية من الأكاديميين الرائدين."
        ]
      },
      "neutral-academic-approach": {
        title: "نهج أكاديمي محايد",
        subtitle: "تحليل علمي موضوعي للرموز خالٍ من التحيز الأيديولوجي.",
        content: [
          "غالباً ما تقع دراسة الرموز الدينية والثقافية فريسة للذاتية الأيديولوجية. تفرض الأكاديمية بدقة نهجاً علمياً محايداً للسيميائية. نحن نفحص الرموز كنقاط بيانات تاريخية واجتماعية، ونفك شفرة معناها التطوري دون تحيز.",
          "هذا الالتزام بالموضوعية الأكاديمية هو ما يميز أبحاثنا ومنشوراتنا على مستوى العالم. يتم تدريب الطلاب على فصل المعتقدات الشخصية عن التحليل الأكاديمي، باستخدام أطر اجتماعية صارمة.",
          "يصبح خريجونا باحثين موضوعيين، قادرين على إنتاج أبحاث تحظى بالاحترام وتُنشر عبر مؤسسات عالمية متنوعة، بغض النظر عن الخلفيات الثقافية أو الأيديولوجية."
        ]
      }
    },
    footer: {
      text: "د. فاطمة فاضل العيساوي. جميع الحقوق محفوظة."
    }
  }
};
