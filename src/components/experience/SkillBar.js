import React from 'react';

export function SkillBar({ prct,skill }) {
  return (
    <div className="skills">
      <div className="details"></div>
      <div className="bar">
        <div id={skill}>
          <style>
            {`
              .skills:not(:last-child) {
                margin-bottom: 0px;
              }
              .details {
                width: 100%;
                display: flex;  
                justify-content: space-between;
                margin-bottom: 0px;
              }
              .bar {
                position: relative;
                border: 0.5px solid var(--color-bg);
                border-radius: 20px;
              }
              .bar div {
                position: relative;
                width: 0;
                height: 9px;
                border-radius: 10px;
                background-color: var(--color-primary);
              }
              #${skill} {
                animation: ${skill}-fill 2s forwards;
              }
              @keyframes ${skill}-fill {
                100% {
                    width: ${prct}%;
                }
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
}
