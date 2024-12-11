import { useState, useEffect } from "react";
import Header from "../../components/header/header";
import SearchBar from "../../components/searchBar/searchBar";
import NewsList from "../../components/newsList/newsList";
import { INewsArticle } from "../../interfaces/interfaces";

const Home = () => {
    
        const [articles, setArticles] = useState<INewsArticle[]>([]);
        const [searchQuery, setSearchQuery] = useState<string>("");
        const [language, setLanguage] = useState<string>("en");
        const [isLoading, setIsLoading] = useState<boolean>(false);
        const [shouldFetch, setShouldFetch] = useState<boolean>(false);


        const fetchNews = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://newsapi.org/v2/everything?q=${searchQuery}&language=${language}&apiKey=bbafd81f69034d47a0e12c02d267ef8a`);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
            setIsLoading(false)
        };

        useEffect(() => {
            if (shouldFetch){
                fetchNews()
                    setShouldFetch(false)
            }
        }, [shouldFetch]);

        const handleSearch = () => {
            setShouldFetch(true);
        }

      return (
        <div>
            <Header />
            <SearchBar
            setSearchQuery= {setSearchQuery}
            setLanguage= {setLanguage}
            onSearch= {handleSearch} 
            />
            <NewsList articles={articles} isLoading={isLoading}/>
        </div>
      )
}
 
export default Home;
