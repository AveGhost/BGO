import Navigation from "./components/navigation/navigation.component";
import ReviewCard from "./components/review/review-card.component";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="grid grid-cols-4 gap-8 py-8 container mx-auto">
        <ReviewCard rate={3} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{avatar: "/avatar.png", name: "AveGhost", date: "2 dni temu"}}/>
        <ReviewCard rate={5} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{avatar: "/avatar.png", name: "AveGhost", date: '19.03.2025'}}/>
        <ReviewCard rate={10} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{avatar: "/avatar.png", name: "AveGhost", date: '04.02.2025'}}/>
        <ReviewCard rate={3} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{name: "AveGhost", date: '07.11.2024'}}/>
      </div>
    </div>
  );
}
