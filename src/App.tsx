import Header from '@/components/header/Header';
import Introduction from '@/components/introduction/Introduction';
function App() {
  return (
    <>
      <header className="w-[90%] mx-auto mt-6">
        <Header />
      </header>
      <section className="w-[95%] mx-auto mt-24 lg:w-[70%]  lg:mt-40">
        <Introduction />
      </section>
    </>
  );
}

export default App;
