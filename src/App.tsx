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
    'RESPOSTA NEBULOSA', 'SEM DÚVIDA', 'ADEUS', 'DEFINITIVAMENTE',
    'ABSOLUTAMENTE NÃO', 'TALVEZ MAIS TARDE', 'SINAIS APONTAM QUE NÃO',
    'NÃO DUVIDO', 'DEPENDE', 'É POSSÍVEL', 'PROVAVELMENTE SIM',
    'PROVAVELMENTE NÃO', 'MUITO INCERTO', 'ESPERE UM POUCO', 'RETORNE DEPOIS',
    'CONTINUE TENTANDO', 'O CAMINHO É CLARO', 'O CAMINHO É ESCURO',
    'A RESPOSTA VEM', 'SILÊNCIO ESPIRITUAL', 'FORÇA NEGATIVA', 'FORÇA POSITIVA',
    'TUDO INDICA QUE SIM', 'TUDO INDICA QUE NÃO', 'O FUTURO É INCERTO',
    'O DESTINO CHAMA', 'NÃO ESTÁ CLARO', 'PERGUNTE AO UNIVERSO', 'RESPIRE E PERGUNTE',
    'A MAGIA NÃO RESPONDE', 'OS ESPÍRITOS ACORDAM', 'OS ESPÍRITOS DORMEM',
    'FOCO NA PERGUNTA', 'ENERGIA FRACA', 'ENERGIA FORTE', 'TENTE NOVAMENTE',
    'O TEMPO DIRÁ', 'CONVERSE COM O CORAÇÃO', 'OUÇA A SUA INTUIÇÃO',
    'A VERDADE SE REVELA', 'UM SEGREDO SE ESCONDE', 'SORTE DO INICIANTE',
    'NÃO HÁ ESCOLHA', 'HÁ SEMPRE UMA ESCOLHA', 'O JOGO CONTINUA',
    'AS RODAS GIRAM', 'A NOITE FALA', 'O DIA GUARDARÁ', 'ALÉM DOS VÉUS',
    'LADO A LADO', 'NUNCA SERÁ', 'JÁ FOI', 'SEMPRE SERÁ', 'HOJE NÃO',
    'AMANHÃ TALVEZ', 'LEMBRE-SE DO PASSADO', 'PENSE NO FUTURO', 'VIVA O PRESENTE'
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
