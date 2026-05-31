import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ArrowSquareOut, ShoppingCart } from '@phosphor-icons/react'

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
            <Heart className="h-8 w-8 text-accent" weight="fill" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Support Sundown Radio</h1>
          <p className="text-lg text-muted-foreground">
            Help keep your community radio station on air
          </p>
        </div>

        <Card className="p-8 mb-8">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Sundown Radio is run entirely by volunteers and is funded almost exclusively through our fundraising efforts and advertising.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            If you like what we are doing and would like to make a donation to help us - no matter how small - please click the button to go to our PayPal page.
          </p>
          
          <div className="flex justify-center mb-8">
            <Button 
              size="lg" 
              className="gap-2 bg-accent hover:bg-accent/90"
              asChild
            >
              <a 
                href="https://www.paypal.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Heart weight="fill" className="h-5 w-5" />
                Donate via PayPal
                <ArrowSquareOut className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>Make your payments with PayPal. It is free, secure, effective.</p>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-card to-muted/20">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <ShoppingCart className="h-6 w-6 text-primary" weight="duotone" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Shop and Support</h2>
              <p className="text-muted-foreground">Raise funds while shopping online</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Alternatively you can support us when you make online purchases from your favourite retailer by using <strong>easyfundraising</strong>. Simply register and select Sundown Radio as your preferred Charity. Then navigate to your retailer through the site, make your purchase as normal and the retailer will donate a percentage to Sundown Radio.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                1
              </div>
              <p className="text-muted-foreground">
                Register at easyfundraising.org.uk
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                2
              </div>
              <p className="text-muted-foreground">
                Select Sundown Radio as your preferred charity
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                3
              </div>
              <p className="text-muted-foreground">
                Shop through the site and retailers donate automatically
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              className="gap-2"
              asChild
            >
              <a 
                href="https://www.easyfundraising.org.uk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Learn More
                <ArrowSquareOut className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-foreground mb-2">
            Thank you.
          </p>
          <p className="text-muted-foreground">
            Your support helps keep Sundown Radio broadcasting to our community.
          </p>
        </div>
      </div>
    </div>
  )
}
