import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Lintech Web Solutions - Best Website Designers in Kenya'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: 'linear-gradient(to bottom right, #000000, #111111)',
                    position: 'relative',
                }}
            >
                {/* Abstract Gradient Background Objects */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-10%',
                        width: '800px',
                        height: '800px',
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-20%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2), transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                    }}
                >
                    {/* Logo/Icon Representation */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100px',
                            height: '100px',
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, #3b82f6, #9333ea)',
                            marginBottom: '40px',
                            boxShadow: '0 0 50px rgba(59, 130, 246, 0.5)',
                            fontSize: '60px',
                            color: 'white',
                            fontFamily: 'sans-serif',
                        }}
                    >
                        {'</>'}
                    </div>

                    <div
                        style={{
                            fontSize: '80px',
                            fontWeight: 'bold',
                            color: 'white',
                            lineHeight: 1.1,
                            marginBottom: '20px',
                            textAlign: 'center',
                            fontFamily: 'sans-serif',
                            textShadow: '0 0 40px rgba(0,0,0,0.5)',
                        }}
                    >
                        Lintech Web Solutions
                    </div>

                    <div
                        style={{
                            fontSize: '40px',
                            color: '#94a3b8',
                            textTransform: 'uppercase',
                            letterSpacing: '8px',
                            fontFamily: 'sans-serif',
                            textAlign: 'center',
                        }}
                    >
                        Design × Development × Results
                    </div>
                </div>

                {/* Footer/Tagline */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        display: 'flex',
                        fontSize: '24px',
                        color: '#475569',
                        fontFamily: 'sans-serif',
                    }}
                >
                    lintechwebsolutions.co.ke
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
