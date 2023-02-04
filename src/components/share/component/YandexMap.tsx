export const YandexMap = () => {
    return (
      <>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <iframe title="This is a unique title"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4fd2311e8d1498a2532ca571da79018f73ec0d3bb7061d92ad330134f5118353&source=constructor"
            width="100%"
            height={400}
            frameBorder={0}
          />
        </div>
      </>
    );
  };