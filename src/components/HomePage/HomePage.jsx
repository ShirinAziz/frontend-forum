import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import threadsData from '../../mockData/threads.json'; // Importerar json som modul eftersom den ligger i src(i egen fil) och inte public
import LatestThreads from './LatestThreads';
import PopularThreads from './PopularThreads';
import jsImage from './js.webp';


 //Denna del kan man sedan byta ut för framtida Api server sammarbete , även lägga till http only cookies för gdpr skydd som visas för användaren på startsidan
const HomePage = () => {
  const [latestThreads, setLatestThreads] = useState([]);
  const [popularThreads, setPopularThreads] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const navigate = useNavigate(); 

  
  useEffect(() => {
    const sortedByDate = [...threadsData].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    setLatestThreads(sortedByDate.slice(0, 3));

    const sortedByPopularity = [...threadsData].sort((a, b) => b.views - a.views);
    setPopularThreads(sortedByPopularity.slice(0, 3));
  }, []);

  const handleSearchQueryChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const filteredThreads = threadsData.filter(thread =>
        thread.title.toLowerCase().includes(query.toLowerCase()) ||
        thread.content.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredThreads);

      // Visa varning om inga trådar hittas
      if (filteredThreads.length === 0) {
        setWarningMessage("Sökresultat finns ej");
      } else {
        setWarningMessage("");
      }
    } else {
      setSearchResults([]);
      setWarningMessage("");
    }
  };

  const handleSearch = () => {
    if (searchQuery) {
      const filteredThreads = threadsData.filter(thread =>
        thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thread.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredThreads);
      navigate("/search-results"); 
    } else {
      setSearchResults([]);
    }
  };

  const handleThreadClick = (thread) => {
    navigate(`/thread/${thread.id}`); 
  };

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={jsImage}
            alt="JS Image"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Välkommen till vårt utvecklarforum!</h1>
            <p className="py-6">
              Här kan du som programmerare diskutera kod, dela erfarenheter, lösa problem och få hjälp med tekniska utmaningar. Oavsett om du är nybörjare eller erfaren utvecklare, är du välkommen att bidra med dina kunskaper eller ställa frågor.
            </p>

            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                className="input input-bordered w-1/4 py-2"
              />
              <button
                onClick={handleSearch}
                className="btn bg-gray-800 text-white px-4 py-2 text-sm rounded"
              >
                Sök
              </button>
            </div>


            {warningMessage && <p className="text-red-500">{warningMessage}</p>}

            {searchQuery && searchResults.length > 0 && (
              <div className="mt-2">
                <ul className="bg-white border border-gray-300 rounded-md">
                  {searchResults.map((thread) => (
                    <li key={thread.id} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleThreadClick(thread)}>
                      {thread.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-16"></div>

      {/* Flex container för populära och senaste trådar */}
      <div className="flex justify-center items-center space-x-6 mb-8">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <LatestThreads threads={latestThreads} onThreadClick={handleThreadClick} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <PopularThreads threads={popularThreads} onThreadClick={handleThreadClick} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
