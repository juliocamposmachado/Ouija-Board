import { useState, useEffect } from 'react';
import OuijaBoard from './components/OuijaBoard';
import Planchette from './components/Planchette';

function App() {
  const [question, setQuestion] = useState('');
  const [isAsking, setIsAsking] = useState(false);
  const [answer, setAnswer] = useState('');
  const [planchettePosition, setPlanchettePosition] = useState({ x: 50, y: 50 });

  const ouijaResponses = [
    'SIM', 'NÃO', 'TALVEZ', 'COM CERTEZA', 'NEM PENSAR',
    'PERGUNTE NOVAMENTE', 'NÃO POSSO DIZER', 'SINAIS APONTAM QUE SIM',
    'MUITO DUVIDOSO', 'É CERTO', 'MELHOR NÃO DIZER AGORA',
    'CONCENTRE-SE E PERGUNTE NOVAMENTE', 'MINHAS FONTES DIZEM NÃO',
    'AS PERSPECTIVAS NÃO SÃO BOAS', 'VOCÊ PODE CONFIAR NISSO',
    'RESPOSTA NEBULOSA', 'SEM DÚVIDA', 'ADEUS'
  ];

  const letterPositions: { [key: string]: { x: number; y: number } } = {
    'A': { x: 15, y: 25 }, 'B': { x: 20, y: 23 }, 'C': { x: 25, y: 21 },
    'D': { x: 30, y: 20 }, 'E': { x: 35, y: 19 }, 'F': { x: 40, y: 18 },
    'G': { x: 45, y: 18 }, 'H': { x: 50, y: 18 }, 'I': { x: 55, y: 18 },
    'J': { x: 60, y: 19 }, 'K': { x: 65, y: 20 }, 'L': { x: 70, y: 21 },
    'M': { x: 75, y: 23 }, 'N': { x: 15, y: 40 }, 'O': { x: 20, y: 38 },
    'P': { x: 25, y: 37 }, 'Q': { x: 30, y: 36 }, 'R': { x: 35, y: 35 },
    'S': { x: 40, y: 35 }, 'T': { x: 45, y: 35 }, 'U': { x: 50, y: 35 },
    'V': { x: 55, y: 35 }, 'W': { x: 60, y: 36 }, 'X': { x: 65, y: 37 },
    'Y': { x: 70, y: 38 }, 'Z': { x: 75, y: 40 }, 'SIM': { x: 20, y: 10 },
    'NÃO': { x: 80, y: 10 }, 'ADEUS': { x: 50, y: 85 },
    '1': { x: 25, y: 52 }, '2': { x: 32, y: 50 }, '3': { x: 38, y: 50 },
    '4': { x: 44, y: 50 }, '5': { x: 50, y: 50 }, '6': { x: 56, y: 50 },
    '7': { x: 62, y: 50 }, '8': { x: 68, y: 50 }, '9': { x: 75, y: 52 },
    '0': { x: 50, y: 58 }
  };

  const askQuestion = async () => {
    if (!question.trim() || isAsking) return;

    setIsAsking(true);
    setAnswer('');

    const randomResponse = ouijaResponses[Math.floor(Math.random() * ouijaResponses.length)];
    const responseChars = randomResponse.split('');

    await new Promise(resolve => setTimeout(resolve, 800));

    for (let i = 0; i < responseChars.length; i++) {
      const char = responseChars[i];
      const position = letterPositions[char] || letterPositions['A'];

      setPlanchettePosition(position);
      setAnswer(prev => prev + char);

      await new Promise(resolve => setTimeout(resolve, 600));
    }

    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsAsking(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      askQuestion();
    }
  };

  useEffect(() => {
    document.title = 'Tábua Ouija - Pergunte aos Espíritos';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-amber-400 tracking-wider drop-shadow-lg">
            TÁBUA OUIJA
          </h1>
          <p className="text-amber-200 text-lg opacity-80">
            Faça sua pergunta aos espíritos...
          </p>
        </div>

        <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-6 border border-amber-600 shadow-2xl">
          <div className="space-y-4">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua pergunta..."
              disabled={isAsking}
              className="w-full px-6 py-4 bg-gray-900 bg-opacity-80 text-amber-100 border-2 border-amber-700 rounded-lg text-lg placeholder-amber-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 disabled:opacity-50 transition-all"
            />

            <button
              onClick={askQuestion}
              disabled={isAsking || !question.trim()}
              className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-bold text-lg rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200"
            >
              {isAsking ? 'Consultando os espíritos...' : 'Perguntar'}
            </button>
          </div>

          {answer && (
            <div className="mt-6 p-6 bg-gradient-to-br from-amber-900 to-amber-950 rounded-lg border-2 border-amber-600 shadow-inner">
              <p className="text-3xl font-bold text-center text-amber-200 tracking-widest animate-pulse">
                {answer}
              </p>
            </div>
          )}
        </div>

        <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto">
          <OuijaBoard />
          <Planchette position={planchettePosition} isMoving={isAsking} />
        </div>

        <div className="text-center text-amber-400 text-sm opacity-70">
          <p>As respostas são geradas aleatoriamente para entretenimento</p>
        </div>
      </div>
    </div>
  );
}

export default App;
