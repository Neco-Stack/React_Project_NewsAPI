import { INewsArticle} from "../../interfaces/interfaces";
import './newsCards.css'

interface NewsCardProps {
    article: INewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({article}) => {
    return (
        <div className="news-card">
            <img src={article.urlToImage} alt={article.title}/>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url}>Read more</a>

        </div>
    );
};

export default NewsCard;