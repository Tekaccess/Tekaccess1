export interface Blog {
  id: string;
  collection: string;
  title?: string;
  category?: string;
  content?: string;
  imageUrl?: string;
  date?: number;
  author?: string;
}

export const staticBlogs: Blog[] = [
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
