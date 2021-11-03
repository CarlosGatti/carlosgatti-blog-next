import Container from '../../components/container'
import Image from 'next/image'
import Layout from '../../components/layouts/layout'
import distanceToNow from '../../lib/dateRelative'

import {

  FiMessageSquare,

} from "react-icons/fi";

function TabCoinIcon(props) {
  return (
    <svg
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 0C7.15192 0 0 7.1518 0 15.5C0 23.8481 7.1518 31 15.5 31C23.8465 31 31 23.8497 31 15.5C31 7.16627 23.8624 0 15.5 0ZM15.5 29.7891C7.88805 29.7891 1.21094 23.112 1.21094 15.5C1.21094 7.88805 7.88805 1.21094 15.5 1.21094C23.112 1.21094 29.7891 7.88805 29.7891 15.5C29.7891 23.112 23.112 29.7891 15.5 29.7891Z"
        fill="currentColor"
      />
      <path
        d="M18.0515 3.93367C17.7263 3.85653 17.3998 4.05749 17.3225 4.38287C17.2453 4.70819 17.4464 5.03459 17.7717 5.11185C22.5517 6.2468 26.1562 10.7128 26.1562 15.5C26.1562 21.1767 21.1767 26.1562 15.5 26.1562C9.82331 26.1562 4.84375 21.1767 4.84375 15.5C4.84375 10.7128 8.44829 6.24686 13.2282 5.11185C13.5536 5.03459 13.7547 4.70819 13.6774 4.38287C13.6002 4.05749 13.2739 3.85635 12.9484 3.93367C7.684 5.18372 3.63281 10.1048 3.63281 15.5C3.63281 21.809 9.14857 27.3672 15.5 27.3672C21.809 27.3672 27.3672 21.8514 27.3672 15.5C27.3672 10.1095 23.3204 5.18475 18.0515 3.93367Z"
        fill="currentColor"
      />
      <path
        d="M15.5 4.9043C15.8344 4.9043 16.1055 4.63322 16.1055 4.29883C16.1055 3.96444 15.8344 3.69336 15.5 3.69336C15.1656 3.69336 14.8945 3.96444 14.8945 4.29883C14.8945 4.63322 15.1656 4.9043 15.5 4.9043Z"
        fill="currentColor"
      />
      <path
        d="M15.3486 13.0327H12.7069V20.2174H10.93V13.0327H8.32385V11.5934H15.3486V13.0327Z"
        fill="currentColor"
      />
      <path
        d="M20.2766 17.9489C20.2766 17.6251 20.1858 17.3684 20.0041 17.1789C19.8264 16.9854 19.5224 16.8077 19.092 16.6458C18.6616 16.4839 18.2904 16.324 17.9784 16.166C17.6665 16.0041 17.398 15.8205 17.1729 15.6152C16.9518 15.4059 16.778 15.1611 16.6517 14.8807C16.5293 14.6004 16.4681 14.2667 16.4681 13.8797C16.4681 13.2124 16.6813 12.6655 17.1078 12.239C17.5342 11.8126 18.1009 11.5638 18.8077 11.4927V10.2252H19.7554V11.5105C20.4543 11.6092 21.0012 11.9014 21.3961 12.3871C21.7909 12.8688 21.9884 13.4947 21.9884 14.2647H20.2766C20.2766 13.7909 20.1779 13.4375 19.9804 13.2045C19.787 12.9676 19.5263 12.8491 19.1986 12.8491C18.8748 12.8491 18.6241 12.9419 18.4464 13.1275C18.2687 13.3091 18.1798 13.5618 18.1798 13.8856C18.1798 14.1857 18.2667 14.4266 18.4404 14.6082C18.6142 14.7899 18.936 14.9755 19.4059 15.165C19.8798 15.3546 20.2687 15.5342 20.5727 15.704C20.8768 15.8699 21.1335 16.0594 21.3427 16.2726C21.552 16.4819 21.712 16.7228 21.8225 16.9952C21.9331 17.2638 21.9884 17.5777 21.9884 17.937C21.9884 18.6083 21.7791 19.1532 21.3605 19.5718C20.942 19.9903 20.3654 20.2371 19.631 20.3122V21.4908H18.6892V20.3181C17.8797 20.2312 17.2519 19.9449 16.8057 19.4592C16.3634 18.9696 16.1423 18.32 16.1423 17.5105H17.8541C17.8541 17.9804 17.9646 18.3418 18.1858 18.5945C18.4108 18.8432 18.7327 18.9676 19.1512 18.9676C19.4987 18.9676 19.7731 18.8768 19.9745 18.6952C20.1759 18.5096 20.2766 18.2608 20.2766 17.9489Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Blog({ latestPosts }) {
  return (
    <>
    <Layout>

      <Container>
        <div  className="my-6">
          <h1 className="text-2xl font-bold">Últimas publicações do blog:</h1>
        </div>
          <section>
                {latestPosts.map((item) => (
                  <div key={item.Id}>
                    <NewsCard data={item} />
                  </div>
                ))}
          </section>  

     </Container>

    </Layout>
    </> 
  )
}

export default Blog


const NewsCard = ({ data }) => {
  return (
    <div className="flex border-gray-100 border p-4 rounded-md mb-4">
      <div className="flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="font-bold text-xl">{data.Title}</h3>
          <p className="text-gray-600 text-sm mt-1">
            {data.Text}
          </p>
        </div>
        <footer className="flex items-center mt-4">
          <time className="text-sm">{distanceToNow(new Date(data.Date))}</time>
          <div className="h-5 w-0 border-l border-gray-200 mx-4"></div>
          <div className="flex items-center">
            <div className="user-avatar">
              <img
                className="rounded-full h-5 w-5 mr-2 flex-shrink-0 "
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                alt=""
              />
            </div>
            <span className="user-name text-sm flex-1">@{data.Email}</span>
          </div>
        </footer>
      </div>
      <div className="actions flex flex-col justify-center gap-4 ml-4 p-1">
        <button type="button" className="flex flex-col items-center">
          <FiMessageSquare size={22} className="mb-1" stroke-width="1.5" />
          <span className="text-sm">123</span>
        </button>
        <button type="button" className="flex flex-col items-center">
          <TabCoinIcon className="mb-1 h-6" />
          <span className="text-sm">{data.coins}</span>
        </button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(process.env.API);
  const res = await fetch(response.url + '/api/latestposts/')
  console.log(res)

  const latestPosts = await res.json()

  if (!latestPosts) {
    return {
      notFound: true,
    }
  }
  return {
    props: { latestPosts }, // will be passed to the page component as props
  }
}
