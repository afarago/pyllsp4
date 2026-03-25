import React from 'react';

export const Banner: React.FC = () => {
    return (
        <div
            className="banner text-dark d-flex px-3 justify-content-center align-items-center text-center"
            style={{ backgroundColor: '#FFCC00', minHeight: '3em', padding: '0.4em 1em' }}
        >
            <div style={{ fontSize: '0.9rem' }}>
                🚀 <a
                    href="https://robovibe.afarago.hu/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                >
                    RoboVibe
                </a>: Explore, Build, and Learn: Start your next robotics adventure with{' '}
                RoboVibe
                - my ultimate robot map planning and AI, ML tool.
            </div>
        </div>
    );
};
