export default function Newsletter({}) {
    return (

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">Consider subscribing to our Newsletter</h1>
            <p class="leading-relaxed mt-4">News about technology and financial market.</p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
              <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button class="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Regiter</button>
            <p class="text-xs text-gray-500 mt-3">You can easily unsubscribe if you don't like it.</p>
          </div>
        </div>
      </section>
        
    )
  }