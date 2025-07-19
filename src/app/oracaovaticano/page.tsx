import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OracaoVaticanoPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-primary">
              Oração do Vaticano
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg">
              Esta é a nova página da Oração do Vaticano. O que você gostaria de adicionar aqui?
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
