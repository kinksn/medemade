import ServiceCard from "@/components/ui/molecules/service-card";
import { Header } from "@/components/ui/template/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="bg-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                人が愛で続ける体験を。
              </h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
                人が愛でて使い続ける体験を、
                <br />
                デザインとエンジニアリングの力で仕立てます。
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Services</h2>
              <div className="mt-12">
                <ServiceCard
                  title="鳥さんを愛でてつながる癒やしのSNS"
                  description="鳥さんの写真を投稿して数値ではなく「愛でる」でつながる。SNS疲れしない癒しのサービスです。"
                  imageUrl="/top/service/torimede.png"
                  buttonLink="https://www.torimede.com/"
                  buttonLabel="VIEW"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Contact</h2>
              <div className="mt-10 flex justify-center space-x-8">
                <a
                  href="mailto:your-email@example.com"
                  className="text-primary hover:text-primary/80"
                >
                  Email: kataoka0417@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 medemade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
