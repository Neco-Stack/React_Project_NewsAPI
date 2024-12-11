import { INewsArticle } from "../../interfaces/interfaces";
import NewsCard from "../newsCard/newsCard";
import Loading from "../loading/Loading";

interface NewsListProps {
    articles: INewsArticle[];
    isLoading: boolean;
}

const NewsList: React.FC<NewsListProps> = ({articles, isLoading}) => {
    if (isLoading) return <Loading/>;

    return (
        <div className="newsList">
            {articles.map((article, index) => (
                <NewsCard key={index} article={article}/>
            ))}
        </div>
    );
};

export default NewsList;