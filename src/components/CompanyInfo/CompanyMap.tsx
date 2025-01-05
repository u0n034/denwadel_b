import React from 'react';

export const CompanyMap = () => {
  const [activeLocation, setActiveLocation] = React.useState<'nanao' | 'tokyo'>('nanao');

  const mapUrls = {
    nanao: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.593224408671!2d136.96203307667224!3d37.04334417217886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff73d9c2944b45b%3A0x3842a2fe25be34ca!2z44Of44OKLuOCr-ODqyAobWluYS5jbGUp!5e0!3m2!1sja!2sjp!4v1734457105828!5m2!1sja!2sjp",
    tokyo: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6208580875405!2d139.7032826766242!3d35.661711772593605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b58a8647f7d%3A0x8c788f5cbd0e1e64!2z44Kv44Ot44K544Kz44O844OX5riL6LC3!5e0!3m2!1sja!2sjp!4v1734457155073!5m2!1sja!2sjp"
  };

  return (
    <div>
      <div className="flex border-b border-gray-100">
        <button
          className={`flex-1 py-4 text-center transition-colors ${
            activeLocation === 'nanao'
              ? 'bg-yellow-50 text-yellow-500 font-bold'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
          onClick={() => setActiveLocation('nanao')}
        >
          本社
        </button>
        <button
          className={`flex-1 py-4 text-center transition-colors ${
            activeLocation === 'tokyo'
              ? 'bg-yellow-50 text-yellow-500 font-bold'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
          onClick={() => setActiveLocation('tokyo')}
        >
          東京オフィス
        </button>
      </div>
      <div className="h-[400px] w-full">
        <iframe
          src={mapUrls[activeLocation]}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};