import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Quiz from './components/Quiz/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Dedicated />
      <Aboutus />
      <Manage />
      <Quiz/>
      <FAQ />
    </main>
  )
}
