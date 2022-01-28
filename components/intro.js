export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-5 mb-16 md:mb-12 bg-gray-100 dark:bg-gray-600">
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      <a
          href="https://github.com/CarlosGatti/carlosgatti-blog-next"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Learn More
        </a>{' '} about the technologies used to develop this blog completely free. {' '}
      </h4>
      <h3 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h3>
    </section>
  )
}