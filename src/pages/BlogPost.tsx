import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="healthcare-container">
          <Breadcrumbs 
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]} 
          />
        </div>
      </section>

      {/* Article */}
      <article className="healthcare-section">
        <div className="healthcare-container">
          <div className="max-w-3xl mx-auto">
            {/* Article Header */}
            <header className="mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                {post.category}
              </span>
              
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>Dra. María Gabriela Castro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readingTime} min de lectura</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-accent font-medium hover:underline"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Blog
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-5xl mx-auto mt-16 pt-16 border-t border-border">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Artículos Relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <span className="inline-flex items-center text-accent text-sm font-medium">
                      Leer más
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;