import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

export default function App() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    async function carregarAgentes() {
      try {
        const response = await axios.get('https://valorant-api.com/v1/agents?language=pt-BR');// ?language=pt-BR requisita os dados dos agentes em português

        if (response.data && Array.isArray(response.data.data)) {
          const agentesFiltrados = response.data.data.filter(agent =>
            agent.uuid !== 'ded3520f-4264-bfed-162d-b080e2abccf9' && // remove o agente que está duplicado
            agent.isPlayableCharacter === true // garante que seja agente jogável
          );
          setAgents(agentesFiltrados);
        } else {
          console.error('Dados dos agentes não encontrados ou mal formatados');
        }
      } catch (error) {
        console.error('Erro ao carregar dados dos agentes', error);
      }
    }

    carregarAgentes();
  }, []);

  return (
    <div className="app-container">
      <h1>Agentes do Valorant</h1>
      <div className="agents-container">
        {agents.length > 0 ? (
          agents.map(agent => (
            <div key={agent.uuid} className="agent-card">
              {agent.fullPortrait && (
                <img
                  src={agent.fullPortrait}
                  alt={agent.displayName}
                  className="agent-imagem"
                />
              )}
              <div className="agent-info">
                <h2>{agent.displayName}</h2>
                <p>{agent.description}</p>
                <p><strong>Papel: </strong>{agent.role ? agent.role.displayName : 'Desconhecido'}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Carregando agentes...</p>
        )}
      </div>
    </div>
  );
}
