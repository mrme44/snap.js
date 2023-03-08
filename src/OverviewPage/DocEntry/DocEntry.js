import ReactMarkdown from 'react-markdown';
import style from './DocEntry.style';
import { extractTopLevelPageFromRoute } from '../../shared';

export default function DocEntry({ entry, page, setPage }) {
  const { fnSignature, summary } = entry.manifest;
  const path = [extractTopLevelPageFromRoute(page), entry.name].join('/');
  return (
    <div className={style.docEntry}>
      <a href={'#!/' + path} className={style.fnSignature}>
        <code
          onClick={() => {
            setPage(path);
          }}
        >
          {fnSignature}
        </code>
      </a>
      <ReactMarkdown className={style.summary}>{summary}</ReactMarkdown>
    </div>
  );
}
