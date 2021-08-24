import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return <div className='app'>{t('hello world')}</div>;
}

export default App;
