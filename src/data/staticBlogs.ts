export interface Blog {
  id: string;
  collection: string;
  title?: string;
  category?: string;
  content?: string;
  introLeadHtml?: string;
  introHtml?: string;
  outroHtml?: string;
  featureImage?: string;
  gallery?: string[];
  imageUrl?: string;
  date?: number;
  author?: string;
}

export const staticBlogs: Blog[] = [
  {
    id: "tekaccess-erp-launch",
    collection: "static",
    title: "Celebrating Progress, Innovation & the Road Ahead",
    category: "Milestones",
    author: "Tekaccess Team",
    date: new Date("2026-10-07").getTime(),
    imageUrl: "/blog/erp-launch/intro1.jpg",
    introLeadHtml: `
      <p><strong>Tekaccess celebrates a new chapter with the launch of the Tekaccess ERP and a milestone.</strong></p>
    `,
    featureImage: "/blog/erp-launch/0.jpg",
    introHtml: `
      <p>What started as a vision to build a more connected, efficient, and scalable operation has grown into a company continuously pushing forward, strengthening its systems, expanding its operations, and building the foundation for the future.</p>

      <p>The launch of <strong>Tekaccess ERP</strong> marks an important step in that journey.</p>

      <p>Designed to connect key areas of the business, from <strong>finance and fleet operations to procurement, human resources, sales, and field operations</strong>, the ERP brings information and processes together in one integrated system. It gives teams greater visibility, supports faster decision-making, and creates a stronger foundation for managing a growing business.</p>

      <p>But the day was about more than a new system.</p>

      <p>It was about celebrating the <strong>people, progress, and milestones</strong> that brought Tekaccess to this point.</p>
    `,
    gallery: [
      "/blog/erp-launch/2.jpg",
      "/blog/erp-launch/3.jpg",
      "/blog/erp-launch/4.jpg",
      "/blog/erp-launch/5.jpg",
      "/blog/erp-launch/6.jpg",
      "/blog/erp-launch/7.jpg",
      "/blog/erp-launch/8.jpg",
      "/blog/erp-launch/9.jpg",
      "/blog/erp-launch/10.jpg",
      "/blog/erp-launch/11.jpg",
      "/blog/erp-launch/12.jpg",
      "/blog/erp-launch/13.jpg",
      "/blog/erp-launch/081A1494.jpg",
      "/blog/erp-launch/081A1506.jpg",
      "/blog/erp-launch/081A1560.jpg",
      "/blog/erp-launch/081A1615.jpg",
      "/blog/erp-launch/081A1592.jpg",
      "/blog/erp-launch/081A1635.jpg",
      "/blog/erp-launch/081A1645.jpg",
      "/blog/erp-launch/081A1670.jpg",
      "/blog/erp-launch/081A1846.jpg",
      "/blog/erp-launch/081A2116.jpg",
      "/blog/erp-launch/twinkletwinkleeeeeeeee.jpg",
    ],
    outroHtml: `
      <p>From strengthening our operations to expanding our reach across markets, every milestone represents the collective effort of our teams and the vision that continues to drive the company forward.</p>

      <p>As we celebrate this achievement, we remain focused on what comes next: <strong>building stronger systems, expanding into new markets, and creating a more connected and efficient future for Tekaccess.</strong></p>

      <p>Here's to the journey so far and to everything still ahead.</p>

      <p><strong>Tekaccess Group<br />Building the Future.</strong></p>
    `,
  },
  {
    id: "kwibuka-32",
    collection: "static",
    title: "Kwibuka 32: A Journey of Remembrance and Resilience",
    category: "Community",
    author: "Tekaccess Team",
    date: new Date("2026-04-15").getTime(),
    imageUrl: "/blog/kwibuka.jpeg",
    content: `
      <p>As Rwanda marks the 32nd commemoration of the 1994 Genocide against the Tutsi, the Tekaccess team joined the nation in honoring the memory of those lost and reflecting on the journey of reconstruction and unity.</p>
      
      <p>Kwibuka, which means "to remember," is a time for us to pause and pay tribute to the more than one million lives taken during the 100 days of darkness. It is also a time to recognize the incredible resilience of the Rwandan people and the progress our country has made in rebuilding its social fabric and economy.</p>
      
      <div style="margin: 2rem 0; border-radius: 1rem; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
        <img src="/blog/kwibuka (1).jpeg" alt="Tekaccess Team at Memorial" style="width: 100%; height: auto; display: block;" />
      </div>

      <h2>Our Visit to the Memorial</h2>
      <p>During this period of reflection, our team visited the Kigali Genocide Memorial to lay wreaths and pay our respects. Standing at the site where over 250,000 victims are laid to rest, we were reminded of the importance of "Never Again" and the responsibility we all share in building a peaceful and prosperous future.</p>
      
      <p>At Tekaccess, we believe that development and business cannot thrive without a foundation of peace, unity, and social responsibility. Our commitment to Rwanda goes beyond logistics and technology; it is rooted in being part of a community that values every human life and strives for collective growth.</p>

      <blockquote>
        "Remembrance is not just about looking back; it is about honoring the past to build a better future together."
      </blockquote>

      <div style="margin: 2rem 0; border-radius: 1rem; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
        <img src="/blog/kwibuka (2).jpeg" alt="Tekaccess Team Commemoration" style="width: 100%; height: auto; display: block;" />
      </div>

      

      <h2>Building a Brighter Future</h2>
      <p>Today, Rwanda stands as a beacon of hope and transformation. The progress seen in every sector—from technology to logistics—is a testament to the strength of a united people. We are proud to contribute to this transformation and remain dedicated to our role in Rwanda's continued development.</p>
      
      <p>As we remember, we also renew our commitment to the values of integrity, excellence, and community. We stand with the survivors and honor the memory of the victims by striving for a world where such atrocities never happen again.</p>
      
      <p><strong>#Kwibuka32 #RememberUniteRenew</strong></p>
    `,
  },
];
