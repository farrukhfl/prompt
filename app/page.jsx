import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
<h1 className='head-text text-center'>
Discover & Share
<br className='max-md:hidden' />
<span className="orange-gradient text-center">AI Powered Prompts</span>
<p className="desc text-center">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fuga laborum asperiores optio nam eveniet excepturi! Nihil molestias suscipit quasi autem, distinctio accusantium architecto et!
</p>
<Feed />
</h1>
    </section>
  )
}

export default Home