import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Twitter, ExternalLink, ArrowLeft, Calendar, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const tweets = [
  {
    date: "Apr 5, 2026",
    content: "🚀 Just shipped a new feature for MediFlow — voice-based appointment booking now supports Tamil and Telugu! Building for accessibility matters. #BuildInPublic #AI",
    likes: 42,
    retweets: 12,
    replies: 8,
  },
  {
    date: "Apr 3, 2026",
    content: "Day 120 of #100DaysOfCode (yes I went past 100 😅)\n\nToday: Built a multi-agent content pipeline that converts a single idea into a full reel with script, images, and audio. Zero manual editing. 🤖\n\n#OpenAI #n8n #Automation",
    likes: 89,
    retweets: 24,
    replies: 15,
  },
  {
    date: "Apr 1, 2026",
    content: "Tip for devs using Supabase RLS:\n\nAlways use security definer functions for role checks. Prevents recursive policy issues and keeps your auth clean. 🔐\n\n#Supabase #WebDev #Security",
    likes: 156,
    retweets: 45,
    replies: 22,
  },
  {
    date: "Mar 28, 2026",
    content: "Finovoice update: Trade timeline system now handles 100% accurate P/L calculations with real-time dashboard updates. Built with React + Supabase.\n\nShipping fast, shipping right. 💪\n\n#SaaS #FinTech #React",
    likes: 67,
    retweets: 18,
    replies: 11,
  },
  {
    date: "Mar 25, 2026",
    content: "Web scraping stack I use daily:\n\n🔥 Firecrawl — for structured data\n🤖 Apify — for scale\n🐍 Selenium + BeautifulSoup — for complex sites\n\nEach has its place. Thread below 🧵\n\n#WebScraping #Python #NodeJS",
    likes: 234,
    retweets: 78,
    replies: 34,
  },
  {
    date: "Mar 22, 2026",
    content: "Just solved a hard DP problem on LeetCode after 3 attempts. The trick? Drawing the state transition table on paper first. 📝\n\nNever skip the whiteboard step.\n\n#LeetCode #DSA #CodingTips",
    likes: 112,
    retweets: 31,
    replies: 19,
  },
  {
    date: "Mar 19, 2026",
    content: "Cursor AI + React Native = shipping 3x faster.\n\nBuilt an entire AI-powered app screen with LLM interactions in under 2 hours. The future of development is here.\n\n#CursorAI #ReactNative #AI",
    likes: 198,
    retweets: 56,
    replies: 28,
  },
  {
    date: "Mar 15, 2026",
    content: "Open-sourced my Medium clone! 🎉\n\n✅ JWT auth + Zod validation\n✅ Prisma + connection pooling\n✅ Cloudflare Workers deployment\n✅ Clean, responsive UI\n\nCheck it out on my GitHub 👇\n\n#OpenSource #FullStack #TypeScript",
    likes: 321,
    retweets: 89,
    replies: 42,
  },
];

const TwitterPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link to="/" className="inline-flex items-center gap-2 font-code text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center shrink-0">
                  <span className="font-display text-2xl font-bold text-foreground">SP</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="font-display text-2xl font-bold text-foreground">Shubham Pawar</h1>
                    <span className="w-5 h-5 rounded-full bg-[#1DA1F2] flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                  </div>
                  <p className="font-code text-sm text-muted-foreground mb-3">@shubhampawar4841</p>
                  <p className="font-body text-foreground/80 mb-4">
                    Full Stack Developer 🚀 | Building in public | AI & Web Scraping enthusiast | Sharing daily dev content
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="font-code text-muted-foreground">
                      <span className="text-foreground font-bold">500+</span> Following
                    </span>
                    <span className="font-code text-muted-foreground">
                      <span className="text-foreground font-bold">1.2K</span> Followers
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://twitter.com/shubhampawar4841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#1DA1F2] text-white font-display font-bold rounded-full hover:scale-105 transition-transform text-sm"
                >
                  <Twitter size={16} /> Follow on X
                </a>
                <a
                  href="https://twitter.com/shubhampawar4841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 glass-card rounded-full font-code text-sm text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={14} /> View Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tweets */}
          <div ref={ref} className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Twitter size={20} className="text-[#1DA1F2]" />
              Recent Posts
            </h2>

            {tweets.map((tweet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-xl p-6 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shrink-0">
                    <span className="font-display text-xs font-bold text-foreground">SP</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-bold text-foreground text-sm">Shubham Pawar</span>
                      <span className="font-code text-xs text-muted-foreground">@shubhampawar4841</span>
                      <span className="font-code text-xs text-muted-foreground">·</span>
                      <span className="font-code text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={10} /> {tweet.date}
                      </span>
                    </div>
                    <p className="font-body text-foreground/90 text-sm leading-relaxed whitespace-pre-line mb-4">
                      {tweet.content}
                    </p>
                    <div className="flex items-center gap-6">
                      <span className="flex items-center gap-1.5 font-code text-xs text-muted-foreground hover:text-[#1DA1F2] transition-colors cursor-pointer">
                        <MessageCircle size={14} /> {tweet.replies}
                      </span>
                      <span className="flex items-center gap-1.5 font-code text-xs text-muted-foreground hover:text-emerald-400 transition-colors cursor-pointer">
                        <Repeat2 size={14} /> {tweet.retweets}
                      </span>
                      <span className="flex items-center gap-1.5 font-code text-xs text-muted-foreground hover:text-secondary transition-colors cursor-pointer">
                        <Heart size={14} /> {tweet.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="https://twitter.com/shubhampawar4841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#1DA1F2] text-white font-display font-bold rounded-full hover:scale-105 transition-transform"
            >
              <Twitter size={18} /> See More on X
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TwitterPage;
