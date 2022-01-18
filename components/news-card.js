import Link from 'next/link'
import CoverImage from '../components/cover-image'
import markdownStyles from '../styles/markdown-styles.module.css'

export default function NewsCard({data}) {

    return (

      <div>
          <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a as={`/posts/${data.Id}`} href="/posts/[slug]">
                    <CoverImage className="rounded-t-lg"  title={data.Img} src={data.Img} height={620} width={1240} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{data.Title}</h5>
                    </a>
                <div className="flex items-center">
                
                <div className='flex justify-between'>
                    <div className="user-avatar">
                        <img
                        className="rounded-full h-6 w-6 mr-2 flex-shrink-0 "
                        src="/gatti-foto.png"
                        alt=""
                        />
                    </div>

                    <span className="user-name font-semibold text-xs flex-1 mb-3">@{data.Email}</span>
                </div>
                </div>
                    <div className="font-normal text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: data.Content }} />
                    <a className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={`/posts/${data.Id}`}>
                        Read more
                    </a>
                </div>
            </div>         
        </div>
      </div>
    
  )
}