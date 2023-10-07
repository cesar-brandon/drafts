import BlurImage from "@/components/blur-image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BlurImage
        src="/images/img1.jpg"
        alt="blur image"
        width={500}
        height={500}
      />
    </main>
  )
}
