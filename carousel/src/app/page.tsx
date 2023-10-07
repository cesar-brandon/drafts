import Carousel from "@/components/carousel";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-500">
      <Carousel slides={SLIDES} options={OPTIONS} />
    </main>
  )
}
