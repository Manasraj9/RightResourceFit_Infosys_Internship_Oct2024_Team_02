import React from 'react'
// import Navbar from '../Components/NavbarHome'
// import Footer from '../Components/Footer'
// import backgroundImage from '../images/homebgimg.png'
// import jobPoster from '../images/jobposter.png'
import { Link } from 'react-route   r-dom'
import './companyhomepage.css'
import jobStatusimg from '../images/jobstatusview.png'
const companyhomepage = () => {
    return (
<div style={{width: '100%', height: '100%', position: 'relative', background: '#DBE2EF'}}>
    <img style={{width: 1440, height: 921, left: 5, top: 111, position: 'absolute'}} src="https://via.placeholder.com/1440x921" />
    <div style={{width: 1192, height: 414, left: 125, top: 540, position: 'absolute'}}>
        <div style={{width: 1192, height: 414, left: 0, top: 0, position: 'absolute', background: '#3F72AF'}}></div>
        <div style={{width: 364, height: 180, left: 70, top: 93, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            <div style={{width: 364, color: 'white', fontSize: 48, fontFamily: 'Abhaya Libre', fontWeight: '700', lineHeight: 52.80, wordWrap: 'break-word'}}>Start posting jobs today</div>
            <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: 'white', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: '#3F72AF', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '700', lineHeight: 25.60, wordWrap: 'break-word'}}>Start For Free</div>
            </div>
        </div>
        <div style={{width: 564, height: 344, left: 558, top: 70, position: 'absolute', background: 'white'}}>
            <div style={{paddingLeft: 6.26, paddingRight: 6.26, paddingTop: 4.70, paddingBottom: 4.70, left: 483.52, top: 49.33, position: 'absolute', background: 'white', borderRadius: 3.13, border: '0.39px #E2E7F5 solid', justifyContent: 'center', alignItems: 'center', gap: 3.13, display: 'inline-flex'}}>
                <div style={{width: 9.40, height: 9.40, position: 'relative'}}>
                    <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute'}}></div>
                    <div style={{width: 6.26, height: 6.26, left: 1.57, top: 1.96, position: 'absolute', border: '0.78px #3F72AF solid'}}></div>
                    <div style={{width: 0, height: 1.57, left: 6.26, top: 1.17, position: 'absolute', border: '0.78px #3F72AF solid'}}></div>
                    <div style={{width: 0, height: 1.57, left: 3.13, top: 1.17, position: 'absolute', border: '0.78px #3F72AF solid'}}></div>
                    <div style={{width: 6.26, height: 0, left: 1.57, top: 4.31, position: 'absolute', border: '0.78px #3F72AF solid'}}></div>
                    <div style={{width: 0.78, height: 0.78, left: 3.13, top: 5.87, position: 'absolute', border: '0.78px #3F72AF solid'}}></div>
                </div>
                <div style={{width: 42.68, height: 9.40, color: '#202430', fontSize: 6.26, fontFamily: 'Inter', fontWeight: '500', lineHeight: 10.02, wordWrap: 'break-word'}}>Jul 19 - Jul 25</div>
            </div>
            <div style={{height: 26.62, left: 119.02, top: 45.42, position: 'absolute'}}>
                <div style={{width: 125.29, height: 14.88, left: 0, top: 0, position: 'absolute', color: '#202430', fontSize: 12.53, fontFamily: 'Abhaya Libre', fontWeight: '700', lineHeight: 15.03, wordWrap: 'break-word'}}>Good morning, Maria</div>
                <div style={{width: 210.64, height: 10.18, left: -0, top: 16.44, position: 'absolute', opacity: 0.50, color: '#202430', fontSize: 6.26, fontFamily: 'Epilogue', fontWeight: '500', lineHeight: 10.02, wordWrap: 'break-word'}}>Here is what’s happening with your job listings from July 19 - July 25.</div>
            </div>
            <div style={{width: 211.42, height: 154.65, left: 119.02, top: 84.18, position: 'absolute', background: 'white', border: '0.39px #D6DDEB solid'}}>
                <div style={{paddingTop: 3.92, paddingLeft: 8, paddingRight: 9.10, left: 141.34, top: 42.28, position: 'absolute', background: '#25324B', borderRadius: 3.13, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: '#D6DDEB', fontSize: 6.26, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 10.02, wordWrap: 'break-word'}}>Visitors</div>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 7.05, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 11.28, wordWrap: 'break-word'}}>5,879</div>
                </div>
                <div style={{width: 192.63, left: 9.40, top: 135.86, position: 'absolute', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 17.23, height: 9.40, textAlign: 'center', color: '#7C8493', fontSize: 6.26, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 10.02, wordWrap: 'break-word'}}>Mon</div>
                    <div style={{width: 17.23, height: 9.40, textAlign: 'center', color: '#7C8493', fontSize: 6.26, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 10.02, wordWrap: 'break-word'}}>Tue</div>
                    <div style={{width: 17.23, height: 9.40, textAlign: 'center', color: '#7C8493', fontSize: 6.26, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 10.02, wordWrap: 'break-word'}}>Wed</div>
                    <div style={{width: 17.23, height: 9.40, textAlign: 'center', color: '#7C8493', fontSize: 6.26, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 10.02, wordWrap: 'break-word'}}>Thu</div>
                    <div style={{width: 17.23, height: 9.40, textAlign: 'center', color: '#7C8493', fontSize: 6.26, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 10.02, wordWrap: 'break-word'}}>Fri</div>
                    <div style={{width: 17.23, height: 9.40, textAlign: 'center', color: '#7C8493', fontSize: 6.26, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 10.02, wordWrap: 'break-word'}}>Sat</div>
                    <div style={{width: 17.23, height: 9.40, textAlign: 'center', color: '#7C8493', fontSize: 6.26, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 10.02, wordWrap: 'break-word'}}>Sun</div>
                </div>
                <div style={{width: 192.63, left: 9.40, top: 77.52, position: 'absolute', justifyContent: 'center', alignItems: 'flex-end', gap: 9.40, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', height: 19.58, background: '#E2E7F5', borderRadius: 1.57}} />
                    <div style={{flex: '1 1 0', height: 51.29, background: '#E2E7F5', borderRadius: 1.57}} />
                    <div style={{flex: '1 1 0', height: 32.50, background: '#E2E7F5', borderRadius: 1.57}} />
                    <div style={{flex: '1 1 0', height: 21.92, background: '#E2E7F5', borderRadius: 1.57}} />
                    <div style={{flex: '1 1 0', height: 40.33, background: '#E2E7F5', borderRadius: 1.57}} />
                    <div style={{flex: '1 1 0', height: 55.20, background: '#3F72AF', borderRadius: 1.57}} />
                    <div style={{flex: '1 1 0', height: 32.50, background: '#E2E7F5', borderRadius: 1.57}} />
                </div>
                <div style={{left: 9.40, top: 9.40, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9.40, display: 'inline-flex'}}>
                    <div style={{color: '#25324B', fontSize: 7.83, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 9.40, wordWrap: 'break-word'}}>Company Visitors</div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{color: '#25324B', fontSize: 28.19, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 28.19, wordWrap: 'break-word'}}>21,457</div>
                        <div style={{color: '#7C8493', fontSize: 7.05, fontFamily: 'Epilogue', fontWeight: '500', lineHeight: 11.28, wordWrap: 'break-word'}}>Visitors from July 19 - July 25</div>
                    </div>
                </div>
            </div>
            <div style={{height: 297.19, paddingTop: 23, paddingBottom: 23, left: 339.84, top: 84.18, position: 'absolute', background: 'white', border: '1px #D6DDEB solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 19, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', height: 33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingLeft: 9.40, paddingRight: 9.40, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#25324B', fontSize: 20, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 24, wordWrap: 'break-word'}}>Applicants Statistic</div>
                        <div style={{justifyContent: 'flex-end', alignItems: 'center', gap: 3.13, display: 'flex'}}>
                            <div style={{color: '#3F72AF', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 25.60, wordWrap: 'break-word'}}>View All Jobs</div>
                            <div style={{width: 9.40, height: 9.40, paddingTop: 2.23, paddingBottom: 2.45, paddingLeft: 1.86, paddingRight: 1.66, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 4.72, height: 5.87, position: 'relative', transform: 'rotate(-90deg)', transformOrigin: '0 0'}}>
                                    <div style={{width: 0.39, height: 5.87, left: 0, top: -2.16, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '0.78px #3F72AF solid'}}></div>
                                    <div style={{width: 4.72, height: 2.37, left: 3.50, top: 0, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '0.78px #3F72AF solid'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{alignSelf: 'stretch', height: 0, border: '0.39px #D6DDEB solid'}}></div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 3.13, paddingLeft: 9.40, justifyContent: 'flex-start', alignItems: 'flex-end', gap: 3.13, display: 'inline-flex'}}>
                    <div style={{width: 47.37, height: 19.97, color: '#25324B', fontSize: 72, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 72, wordWrap: 'break-word'}}>158</div>
                    <div style={{color: '#7C8493', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '500', lineHeight: 28.80, wordWrap: 'break-word'}}>Applicants</div>
                </div>
                <div style={{alignSelf: 'stretch', paddingLeft: 9.40, paddingRight: 9.40, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{width: 89.27, height: 6.26, background: '#3F72AF'}} />
                    <div style={{flex: '1 1 0', height: 6.26, background: '#26A4FF'}} />
                    <div style={{flex: '1 1 0', height: 6.26, background: '#25324B'}} />
                    <div style={{flex: '1 1 0', height: 6.26, background: '#D6DDEB'}} />
                </div>
                <div style={{alignSelf: 'stretch', height: 122.79, paddingLeft: 9.40, paddingRight: 9.40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6.26, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6.26, display: 'flex'}}>
                            <div style={{width: 6.26, height: 6.26, background: '#3F72AF', borderRadius: 1.57}} />
                            <div style={{color: '#25324B', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '500', lineHeight: 25.60, wordWrap: 'break-word'}}>Social Media Specialist</div>
                        </div>
                        <div style={{textAlign: 'right', color: '#7C8493', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>67 Applicants</div>
                    </div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6.26, display: 'flex'}}>
                            <div style={{width: 6.26, height: 6.26, background: '#25324B', borderRadius: 1.57}} />
                            <div style={{color: '#25324B', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '500', lineHeight: 25.60, wordWrap: 'break-word'}}>Senior Engineer</div>
                        </div>
                        <div style={{textAlign: 'right', color: '#7C8493', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>21 Applicants</div>
                    </div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6.26, display: 'flex'}}>
                            <div style={{width: 6.26, height: 6.26, background: '#26A4FF', borderRadius: 1.57}} />
                            <div style={{color: '#25324B', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '500', lineHeight: 25.60, wordWrap: 'break-word'}}>Senior Engineer</div>
                        </div>
                        <div style={{textAlign: 'right', color: '#7C8493', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>38 Applicants</div>
                    </div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6.26, display: 'flex'}}>
                            <div style={{width: 6.26, height: 6.26, background: '#D6DDEB', borderRadius: 1.57}} />
                            <div style={{color: '#25324B', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '500', lineHeight: 25.60, wordWrap: 'break-word'}}>Other</div>
                        </div>
                        <div style={{textAlign: 'right', color: '#7C8493', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>54 Applicants</div>
                    </div>
                </div>
            </div>
            <div style={{paddingTop: 24, paddingBottom: 24, left: 119.02, top: 251.35, position: 'absolute', background: 'white', border: '1px #D6DDEB solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
                <div style={{width: 432.23, height: 24, position: 'relative'}}>
                    <div style={{width: 432.23, height: 0, left: 0, top: 18.79, position: 'absolute', border: '0.39px #D6DDEB solid'}}></div>
                    <div style={{left: 9.40, top: -0, position: 'absolute', color: '#25324B', fontSize: 20, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 24, wordWrap: 'break-word'}}>Recent Applicants</div>
                </div>
                <div style={{height: 131.55, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', padding: 9.40, background: '#F8F8FD', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{height: 25.06, justifyContent: 'flex-start', alignItems: 'center', gap: 6.26, display: 'flex'}}>
                            <div style={{width: 25.06, height: 25.06, position: 'relative'}}>
                                <img style={{width: 25.06, height: 25.06, left: 0, top: 0, position: 'absolute', borderRadius: 9999}} src="https://via.placeholder.com/25x25" />
                                <img style={{width: 26.10, height: 26.10, left: -0.52, top: -0.52, position: 'absolute'}} src="https://via.placeholder.com/26x26" />
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{color: '#25324B', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '700', lineHeight: 28.80, wordWrap: 'break-word'}}>Jake Gyll</div>
                                <div style={{color: '#7C8493', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 28.80, wordWrap: 'break-word'}}>Social Media Specialist</div>
                            </div>
                        </div>
                        <div style={{width: 78.30, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{color: '#25324B', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 25.60, wordWrap: 'break-word'}}>Email</div>
                            <div style={{color: '#7C8493', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 28.80, wordWrap: 'break-word'}}>jakegyll@email.com</div>
                        </div>
                        <div style={{width: 51.29, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{color: '#25324B', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 25.60, wordWrap: 'break-word'}}>Date Applied</div>
                            <div style={{color: '#7C8493', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 28.80, wordWrap: 'break-word'}}>2 days ago</div>
                        </div>
                        <div style={{paddingLeft: 8.22, paddingRight: 8.22, paddingTop: 4.70, paddingBottom: 4.70, background: '#E9EBFD', border: '0.39px #3F72AF solid', justifyContent: 'center', alignItems: 'center', gap: 3.92, display: 'flex'}}>
                            <div style={{textAlign: 'center', color: '#3F72AF', fontSize: 14, fontFamily: 'Epilogue', fontWeight: '700', lineHeight: 22.40, wordWrap: 'break-word'}}>See Application</div>
                        </div>
                        <div style={{width: 9.40, height: 9.40, position: 'relative'}}>
                            <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute'}}></div>
                            <div style={{width: 0.78, height: 0.78, left: 1.57, top: 4.31, position: 'absolute', border: '0.78px #25324B solid'}}></div>
                            <div style={{width: 0.78, height: 0.78, left: 4.31, top: 4.31, position: 'absolute', border: '0.78px #25324B solid'}}></div>
                            <div style={{width: 0.78, height: 0.78, left: 7.05, top: 4.31, position: 'absolute', border: '0.78px #25324B solid'}}></div>
                        </div>
                    </div>
                    <div style={{alignSelf: 'stretch', padding: 9.40, background: 'white', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{height: 25.06, justifyContent: 'flex-start', alignItems: 'center', gap: 6.26, display: 'flex'}}>
                            <div style={{width: 25.06, height: 25.06, position: 'relative'}}>
                                <img style={{width: 25.06, height: 25.06, left: 0, top: 0, position: 'absolute', borderRadius: 9999}} src="https://via.placeholder.com/25x25" />
                                <img style={{width: 25.06, height: 37.59, left: -0, top: -3.13, position: 'absolute'}} src="https://via.placeholder.com/25x38" />
                                <img style={{width: 36.54, height: 24.36, left: -5.74, top: 0.52, position: 'absolute'}} src="https://via.placeholder.com/37x24" />
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{color: '#25324B', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '700', lineHeight: 28.80, wordWrap: 'break-word'}}>Leslie Alexander</div>
                                <div style={{color: '#7C8493', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 28.80, wordWrap: 'break-word'}}>Product Designer</div>
                            </div>
                        </div>
                        <div style={{width: 78.30, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{color: '#25324B', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 25.60, wordWrap: 'break-word'}}>Email</div>
                            <div style={{color: '#7C8493', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 28.80, wordWrap: 'break-word'}}>LeslieAlex@email.com</div>
                        </div>
                        <div style={{width: 51.29, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{color: '#25324B', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 25.60, wordWrap: 'break-word'}}>Date Applied</div>
                            <div style={{color: '#7C8493', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 28.80, wordWrap: 'break-word'}}>2 days ago</div>
                        </div>
                        <div style={{paddingLeft: 8.22, paddingRight: 8.22, paddingTop: 4.70, paddingBottom: 4.70, background: '#E9EBFD', border: '0.39px #3F72AF solid', justifyContent: 'center', alignItems: 'center', gap: 3.92, display: 'flex'}}>
                            <div style={{textAlign: 'center', color: '#3F72AF', fontSize: 14, fontFamily: 'Epilogue', fontWeight: '700', lineHeight: 22.40, wordWrap: 'break-word'}}>See Application</div>
                        </div>
                        <div style={{width: 9.40, height: 9.40, position: 'relative'}}>
                            <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute'}}></div>
                            <div style={{width: 0.78, height: 0.78, left: 1.57, top: 4.31, position: 'absolute', border: '0.78px #25324B solid'}}></div>
                            <div style={{width: 0.78, height: 0.78, left: 4.31, top: 4.31, position: 'absolute', border: '0.78px #25324B solid'}}></div>
                            <div style={{width: 0.78, height: 0.78, left: 7.05, top: 4.31, position: 'absolute', border: '0.78px #25324B solid'}}></div>
                        </div>
                    </div>
                    <div style={{alignSelf: 'stretch', padding: 9.40, background: '#F8F8FD', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{height: 25.06, justifyContent: 'flex-start', alignItems: 'center', gap: 6.26, display: 'flex'}}>
                            <div style={{width: 25.06, height: 25.06, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <img style={{width: 25.06, height: 25.06, borderRadius: 9999}} src="https://via.placeholder.com/25x25" />
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{color: '#25324B', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '700', lineHeight: 28.80, wordWrap: 'break-word'}}>Brooklyn Simmons</div>
                                <div style={{color: '#7C8493', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 28.80, wordWrap: 'break-word'}}>Senior Engineer</div>
                            </div>
                        </div>
                        <div style={{width: 78.30, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{color: '#25324B', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 25.60, wordWrap: 'break-word'}}>Email</div>
                            <div style={{color: '#7C8493', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 28.80, wordWrap: 'break-word'}}>Brooklynsm@email.com</div>
                        </div>
                        <div style={{width: 51.29, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{color: '#25324B', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 25.60, wordWrap: 'break-word'}}>Date Applied</div>
                            <div style={{color: '#7C8493', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 28.80, wordWrap: 'break-word'}}>2 days ago</div>
                        </div>
                        <div style={{paddingLeft: 8.22, paddingRight: 8.22, paddingTop: 4.70, paddingBottom: 4.70, background: '#E9EBFD', border: '0.39px #3F72AF solid', justifyContent: 'center', alignItems: 'center', gap: 3.92, display: 'flex'}}>
                            <div style={{textAlign: 'center', color: '#3F72AF', fontSize: 14, fontFamily: 'Epilogue', fontWeight: '700', lineHeight: 22.40, wordWrap: 'break-word'}}>See Application</div>
                        </div>
                        <div style={{width: 9.40, height: 9.40, position: 'relative'}}>
                            <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute'}}></div>
                            <div style={{width: 0.78, height: 0.78, left: 1.57, top: 4.31, position: 'absolute', border: '0.78px #25324B solid'}}></div>
                            <div style={{width: 0.78, height: 0.78, left: 4.31, top: 4.31, position: 'absolute', border: '0.78px #25324B solid'}}></div>
                            <div style={{width: 0.78, height: 0.78, left: 7.05, top: 4.31, position: 'absolute', border: '0.78px #25324B solid'}}></div>
                        </div>
                    </div>
                </div>
                <div style={{justifyContent: 'flex-end', alignItems: 'center', gap: 6.26, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: '#3F72AF', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 25.60, wordWrap: 'break-word'}}>View all applicants</div>
                    <div style={{width: 9.40, height: 9.40, paddingTop: 2.23, paddingBottom: 2.45, paddingLeft: 1.86, paddingRight: 1.66, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <div style={{width: 4.72, height: 5.87, position: 'relative', transform: 'rotate(-90deg)', transformOrigin: '0 0'}}>
                            <div style={{width: 0.39, height: 5.87, left: 0, top: -2.16, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '0.78px #3F72AF solid'}}></div>
                            <div style={{width: 4.72, height: 2.37, left: 3.50, top: -0, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '0.78px #3F72AF solid'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: 457.29, height: 23.49, left: 106.49, top: 12.53, position: 'absolute'}}>
                <div style={{width: 15.66, height: 15.66, left: 429.10, top: 0, position: 'absolute'}}>
                    <div style={{width: 15.66, height: 15.66, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 9999}} />
                    <div style={{width: 9.40, height: 9.40, left: 3.13, top: 3.13, position: 'absolute'}}>
                        <div style={{width: 6.58, height: 7.52, left: 1.41, top: 0.94, position: 'absolute', background: '#202430'}}></div>
                        <div style={{width: 2.35, height: 2.35, left: 5.87, top: 1.17, position: 'absolute', background: '#FF6550', borderRadius: 9999, border: '0.39px white solid'}} />
                    </div>
                </div>
                <div style={{width: 457.29, height: 0, left: 0, top: 23.49, position: 'absolute', border: '0.39px #E2E7F5 solid'}}></div>
                <div style={{width: 62.54, height: 19.40, paddingTop: 4.70, paddingBottom: 4.70, paddingLeft: 9.40, paddingRight: 7.83, left: 360.13, top: 4.02, position: 'absolute', background: '#3F72AF', justifyContent: 'center', alignItems: 'center', gap: 3.92, display: 'inline-flex'}}>
                    <div style={{width: 9.40, height: 9.40, position: 'relative'}}>
                        <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute'}}></div>
                        <div style={{width: 0.78, height: 6.26, left: 4.31, top: 1.57, position: 'absolute', background: 'white'}}></div>
                        <div style={{width: 6.26, height: 0.78, left: 1.57, top: 4.31, position: 'absolute', background: 'white'}}></div>
                    </div>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '700', lineHeight: 25.60, wordWrap: 'break-word'}}>Post a job</div>
                </div>
            </div>
            <div style={{width: 106.49, height: 480, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 106.49, height: 480, left: 0, top: 0, position: 'absolute', background: '#F9FAFC', border: '0.39px #E2E7F5 solid'}} />
                <div style={{width: 106.49, height: 28.97, left: -0, top: 432.23, position: 'absolute'}}>
                    <div style={{width: 82.61, height: 19.58, left: 12.53, top: 9.40, position: 'absolute'}}>
                        <div style={{width: 57.55, height: 18.79, left: 25.06, top: -0, position: 'absolute'}}>
                            <div style={{width: 37.59, height: 11.35, left: 0, top: 0, position: 'absolute', color: '#202430', fontSize: 7.05, fontFamily: 'Inter', fontWeight: '600', lineHeight: 11.28, wordWrap: 'break-word'}}>Maria Kelly</div>
                            <div style={{width: 57.55, height: 8.22, left: -0, top: 10.57, position: 'absolute', opacity: 0.50, color: '#202430', fontSize: 5.48, fontFamily: 'Inter', fontWeight: '400', lineHeight: 8.22, wordWrap: 'break-word'}}>mariakelly@email.com</div>
                        </div>
                        <div style={{width: 18.79, height: 18.79, left: 0, top: 0, position: 'absolute'}}>
                            <div style={{width: 18.79, height: 18.79, left: 0, top: 0, position: 'absolute', opacity: 0.30, background: '#3F72AF', borderRadius: 9999}} />
                            <div style={{width: 18.79, height: 18.79, left: 0, top: 0, position: 'absolute', background: '#C4C4C4', borderRadius: 9999}} />
                            <img style={{width: 39.15, height: 26.10, left: -7.83, top: -1.57, position: 'absolute'}} src="https://via.placeholder.com/39x26" />
                        </div>
                        <div style={{width: 7.83, height: 7.83, left: 11.75, top: 11.75, position: 'absolute'}}>
                            <div style={{width: 7.83, height: 7.83, left: 0, top: 0, position: 'absolute', borderRadius: 9999}} />
                            <div style={{width: 5.95, height: 7.05, left: 0.98, top: 0.39, position: 'absolute'}}>
                                <div style={{width: 5.95, height: 7.03, left: 0, top: 0, position: 'absolute'}}>
                                    <div style={{width: 3.06, height: 5.28, left: 0, top: 1.75, position: 'absolute', background: '#449B82'}}></div>
                                    <div style={{width: 2.96, height: 5.29, left: 2.99, top: 1.73, position: 'absolute', background: '#9BDB9C'}}></div>
                                    <div style={{width: 5.95, height: 3.59, left: 0, top: 0, position: 'absolute', background: '#56CDAD'}}></div>
                                    <div style={{width: 2.98, height: 4.28, left: 1.48, top: 1.39, position: 'absolute', background: 'white'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 106.49, height: 0, left: 0, top: 0, position: 'absolute', border: '0.39px #E2E7F5 solid'}}></div>
                </div>
                <div style={{width: 106.49, height: 156.61, left: -0, top: 45.42, position: 'absolute'}}>
                    <div style={{width: 74, height: 46.98, left: 12.53, top: 109.62, position: 'absolute'}}>
                        <div style={{width: 74, height: 28.19, left: -0, top: 18.79, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9.40, display: 'inline-flex'}}>
                            <div style={{width: 74, height: 9.40, position: 'relative', opacity: 0.70}}>
                                <div style={{width: 58.34, height: 9.40, left: 15.66, top: 0, position: 'absolute', color: '#202430', fontSize: 6.26, fontFamily: 'Inter', fontWeight: '500', lineHeight: 10.02, wordWrap: 'break-word'}}>Settings</div>
                                <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 7.05, height: 7.05, border: '0.78px #25324B solid'}}></div>
                                    <div style={{width: 2.35, height: 2.35, border: '0.78px #25324B solid'}}></div>
                                </div>
                            </div>
                            <div style={{width: 74, height: 9.40, position: 'relative', opacity: 0.70}}>
                                <div style={{width: 58.34, height: 9.40, left: 15.66, top: -0, position: 'absolute', color: '#202430', fontSize: 6.26, fontFamily: 'Inter', fontWeight: '500', lineHeight: 10.02, wordWrap: 'break-word'}}>Help</div>
                                <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 9.40, height: 9.40}}></div>
                                    <div style={{width: 7.05, height: 7.05, border: '0.78px #25324B solid'}}></div>
                                    <div style={{width: 1.83, height: 2.56, border: '0.78px #25324B solid'}}></div>
                                    <div style={{width: 0, height: 0, border: '0.78px #25324B solid'}}></div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: 28.97, height: 9.40, left: 0, top: 0, position: 'absolute', opacity: 0.50, color: '#202430', fontSize: 5.48, fontFamily: 'Inter', fontWeight: '600', lineHeight: 9.40, letterSpacing: 0.22, wordWrap: 'break-word'}}>SETTINGS</div>
                    </div>
                    <div style={{width: 106.49, height: 0, left: -0, top: 100.23, position: 'absolute', border: '0.39px #E2E7F5 solid'}}></div>
                    <div style={{width: 74, height: 65.78, left: 12.53, top: 25.06, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9.40, display: 'inline-flex'}}>
                        <div style={{width: 56.77, height: 9.40, position: 'relative', opacity: 0.70}}>
                            <div style={{width: 41.11, height: 9.40, left: 15.66, top: -0, position: 'absolute', color: '#202430', fontSize: 6.26, fontFamily: 'Inter', fontWeight: '500', lineHeight: 10.02, wordWrap: 'break-word'}}>Messages</div>
                            <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 9.40, height: 9.40}}></div>
                                <div style={{width: 7.52, height: 7.05, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 3.76, height: 0, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 2.82, height: 0, border: '0.78px #25324B solid'}}></div>
                            </div>
                        </div>
                        <div style={{width: 65.38, height: 9.40, position: 'relative', opacity: 0.70}}>
                            <div style={{width: 49.72, height: 9.40, left: 15.66, top: 0, position: 'absolute', color: '#202430', fontSize: 6.26, fontFamily: 'Inter', fontWeight: '500', lineHeight: 10.02, wordWrap: 'break-word'}}>Company Profile</div>
                            <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 9.40, height: 9.40}}></div>
                                <div style={{width: 3.13, height: 7.05, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 2.35, height: 5.48, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 0, height: 0, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 0, height: 0, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 0, height: 0, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 0, height: 0, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 7.05, height: 0, border: '0.78px #25324B solid'}}></div>
                            </div>
                        </div>
                        <div style={{width: 63.82, height: 9.40, position: 'relative', opacity: 0.70}}>
                            <div style={{width: 48.16, height: 9.40, left: 15.66, top: 0, position: 'absolute', color: '#202430', fontSize: 6.26, fontFamily: 'Inter', fontWeight: '500', lineHeight: 10.02, wordWrap: 'break-word'}}>All Applicants</div>
                            <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 8.61, height: 7.05, background: '#25324B'}}></div>
                            </div>
                        </div>
                        <div style={{width: 74, height: 9.40, position: 'relative', opacity: 0.70}}>
                            <div style={{width: 58.34, height: 9.40, left: 15.66, top: -0, position: 'absolute', color: '#202430', fontSize: 6.26, fontFamily: 'Inter', fontWeight: '500', lineHeight: 10.02, wordWrap: 'break-word'}}>Job Listing</div>
                            <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 9.40, height: 9.40}}></div>
                                <div style={{width: 2.35, height: 1.57, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 5.48, height: 6.26, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 0, height: 0, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 0.78, height: 0, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 0, height: 0, border: '0.78px #25324B solid'}}></div>
                                <div style={{width: 0.78, height: 0, border: '0.78px #25324B solid'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 100.23, height: 18.79, left: 0, top: 0, position: 'absolute'}}>
                        <div style={{width: 93.96, height: 18.79, left: 6.26, top: -0, position: 'absolute', opacity: 0.05, background: '#3F72AF', borderRadius: 3.13}} />
                        <div style={{width: 56.77, height: 9.40, left: 12.53, top: 4.70, position: 'absolute'}}>
                            <div style={{width: 41.11, height: 9.40, left: 15.66, top: -0, position: 'absolute', color: '#3F72AF', fontSize: 6.26, fontFamily: 'Inter', fontWeight: '500', lineHeight: 10.02, wordWrap: 'break-word'}}>Dashboard</div>
                            <div style={{width: 9.40, height: 9.40, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 9.40, height: 9.40}}></div>
                                <div style={{width: 7.05, height: 3.52, border: '0.78px #3F72AF solid'}}></div>
                                <div style={{width: 5.48, height: 3.52, border: '0.78px #3F72AF solid'}}></div>
                            </div>
                        </div>
                        <div style={{width: 1.57, height: 9.40, left: -0, top: 4.70, position: 'absolute', background: '#3F72AF'}}></div>
                    </div>
                </div>
                <div style={{width: 62.64, height: 14.09, left: 12.53, top: 12.53, position: 'absolute'}}>
                    <div style={{width: 12.53, height: 12.53, left: -0, top: 0.78, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{width: 12.53, height: 12.53, background: '#3F72AF', borderRadius: 9999}} />
                        <div style={{width: 7.05, height: 2.35, borderRadius: 0.20, border: '1.17px white solid'}}></div>
                        <div style={{width: 7.83, height: 7.83, position: 'relative', transform: 'rotate(-90deg)', transformOrigin: '0 0'}}>
                            <div style={{width: 6.53, height: 6.53, left: 0.65, top: 0.65, position: 'absolute', background: 'white'}}></div>
                        </div>
                    </div>
                    <div style={{width: 46.98, height: 14.09, left: 15.66, top: -0, position: 'absolute', color: '#202430', fontSize: 9.40, fontFamily: 'Red Hat Display', fontWeight: '700', lineHeight: 14.09, wordWrap: 'break-word'}}>JobHuntly</div>
                </div>
            </div>
        </div>
    </div>
    <div style={{left: 326, top: 240, position: 'absolute', color: '#F9F7F7', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Right Resource Fit connects talented job seekers with top employers.<br/>     Explore 5000+ job opportunities and find your perfect match. <br/>   Whether you're hiring or seeking, we help you achieve success!</div>
    <div style={{width: 522, height: 62, left: 432, top: 139, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Epilogue', fontWeight: '700', textDecoration: 'underline', textTransform: 'uppercase', lineHeight: 57.60, wordWrap: 'break-word'}}>Find Your Dream Job Now</div>
    <div style={{width: 1440, height: 111, left: 0, top: 0, position: 'absolute', background: '#112D4E'}}>
        <div style={{width: 90, height: 90, left: 18, top: 11, position: 'absolute', background: '#D9D9D9'}}></div>
        <div style={{height: 70, padding: 10, left: 762, top: 20, position: 'absolute'}} />
        <div style={{width: 100, paddingLeft: 15, paddingRight: 15, left: 1116, top: 33, position: 'absolute', background: '#3F72AF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', height: 50, textAlign: 'center', color: '#F9F8F8', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>About</div>
        </div>
        <div style={{width: 50, height: 50, left: 1354, top: 37, position: 'absolute'}}>
            <div style={{width: 50, height: 50, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 37.15, height: 35.71, left: 0, top: 14.29, position: 'absolute', background: '#112D4E', borderRadius: 9999}} />
                <div style={{width: 42.57, height: 44.64, left: 7.43, top: -0, position: 'absolute'}}>
                    <div style={{width: 32.81, height: 39.99, left: 5.60, top: 1.92, position: 'absolute', background: 'white'}}></div>
                    <div style={{width: 10.64, height: 11.16, left: 26.61, top: 5.58, position: 'absolute', background: '#FF6550', borderRadius: 9999, border: '1px #112D4E solid'}} />
                </div>
            </div>
        </div>
        <div style={{width: 120, height: 50, paddingLeft: 41, paddingRight: 41, paddingTop: 20, paddingBottom: 20, left: 1234, top: 33, position: 'absolute', background: '#3F72AF', borderRadius: 8, border: '1px #3F72AF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Account</div>
        </div>
        <div style={{width: 165, height: 50, paddingLeft: 15, paddingRight: 15, left: 933, top: 33, position: 'absolute', background: '#3F72AF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', height: 50, textAlign: 'center', color: '#F9F8F8', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Post a Jobs</div>
        </div>
    </div>
    <div style={{width: 250, height: 50, paddingLeft: 15, paddingRight: 15, left: 560, top: 366, position: 'absolute', background: '#3F72AF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div style={{flex: '1 1 0', height: 50, textAlign: 'center', color: '#F9F8F8', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Start posting Jobs</div>
    </div>
    <div style={{width: 1440, height: 360, left: 0, top: 1536, position: 'absolute'}}>
        <div style={{width: 1440, height: 358, left: 0, top: 0, position: 'absolute', background: '#112D4E'}}>
            <div style={{width: 256, height: 32, left: 1060, top: 425, position: 'absolute'}}>
                <div style={{width: 32, height: 32, left: 224, top: 0, position: 'absolute'}}>
                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', opacity: 0.10, background: 'white', borderRadius: 9999}} />
                    <div style={{width: 11.99, height: 10, left: 10.11, top: 11, position: 'absolute', background: 'white'}}></div>
                </div>
                <div style={{width: 32, height: 32, left: 168, top: 0, position: 'absolute'}}>
                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', opacity: 0.10, background: 'white', borderRadius: 9999}} />
                    <div style={{width: 9.99, height: 10, left: 11.15, top: 11, position: 'absolute', background: 'white'}}></div>
                </div>
                <div style={{width: 32, height: 32, left: 112, top: 0, position: 'absolute'}}>
                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', opacity: 0.10, background: 'white', borderRadius: 9999}} />
                    <div style={{width: 12.73, height: 12.73, left: 16.18, top: 25, position: 'absolute', transform: 'rotate(-45.02deg)', transformOrigin: '0 0', background: 'white'}}></div>
                </div>
                <div style={{width: 32, height: 32, left: 56, top: 0, position: 'absolute'}}>
                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', opacity: 0.10, background: 'white', borderRadius: 9999}} />
                    <div style={{width: 11.99, height: 12, left: 10.22, top: 10, position: 'absolute', background: 'white'}}></div>
                </div>
                <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute'}}>
                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', opacity: 0.10, background: 'white', borderRadius: 9999}} />
                    <div style={{width: 6, height: 12, left: 13.26, top: 10, position: 'absolute', background: 'white'}}></div>
                </div>
            </div>
            <div style={{left: 124, top: 427, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '500', lineHeight: 25.60, wordWrap: 'break-word'}}>2024 @ Right Resource Fit. All rights reserved.</div>
            <div style={{width: 362, height: 189, left: 954, top: 64, position: 'absolute'}}>
                <div style={{width: 362, height: 50, left: 0, top: 139, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                    <div style={{height: 50, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', border: '1px #D6DDEB solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{color: '#A8ADB7', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Email Address</div>
                    </div>
                    <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#3F72AF', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '700', lineHeight: 25.60, wordWrap: 'break-word'}}>Subscribe</div>
                    </div>
                </div>
                <div style={{width: 306, left: 0, top: 47, position: 'absolute', color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>The latest job news, articles, sent to your inbox weekly.</div>
                <div style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 28.80, wordWrap: 'break-word'}}>Get job notifications</div>
            </div>
            <div style={{height: 241, left: 588, top: 64, position: 'absolute'}}>
                <div style={{width: 97, height: 220, left: 198, top: 0, position: 'absolute'}}>
                    <div style={{width: 88, height: 173, left: 0, top: 47, position: 'absolute'}}>
                        <div style={{left: 0, top: 147, position: 'absolute', color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Contact Us</div>
                        <div style={{left: 0, top: 98, position: 'absolute', color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Updates</div>
                        <div style={{left: 0, top: 49, position: 'absolute', color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Guide</div>
                        <div style={{left: 0, top: 0, position: 'absolute', color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Help Docs</div>
                    </div>
                    <div style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 28.80, wordWrap: 'break-word'}}>Resources</div>
                </div>
                <div style={{width: 105, height: 241, left: 0, top: 0, position: 'absolute'}}>
                    <div style={{width: 105, height: 194, left: 0, top: 47, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                        <div style={{color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Companies</div>
                        <div style={{color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Pricing</div>
                        <div style={{color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Terms</div>
                        <div style={{color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Advice</div>
                        <div style={{color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Privacy Policy</div>
                    </div>
                    <div style={{left: 1, top: 0, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 28.80, wordWrap: 'break-word'}}>About</div>
                </div>
            </div>
        </div>
        <div style={{width: 1408, height: 0, left: 16, top: 319, position: 'absolute', border: '1px white solid'}}></div>
        <div style={{width: 376, left: 37, top: 61, position: 'absolute', color: '#D6DDEB', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>An excellent platform for job seekers passionate about startups. Discover your ideal job with easier.</div>
        <div style={{width: 256, height: 32, left: 37, top: 202, position: 'absolute'}}>
            <div style={{width: 32, height: 32, left: 224, top: 0, position: 'absolute'}}>
                <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', opacity: 0.10, background: 'white', borderRadius: 9999}} />
                <div style={{width: 11.99, height: 10, left: 10.11, top: 11, position: 'absolute', background: 'white'}}></div>
            </div>
            <div style={{width: 32, height: 32, left: 168, top: 0, position: 'absolute'}}>
                <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', opacity: 0.10, background: 'white', borderRadius: 9999}} />
                <div style={{width: 9.99, height: 10, left: 11.15, top: 11, position: 'absolute', background: 'white'}}></div>
            </div>
            <div style={{width: 32, height: 32, left: 112, top: 0, position: 'absolute'}}>
                <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', opacity: 0.10, background: 'white', borderRadius: 9999}} />
                <div style={{width: 12.73, height: 12.73, left: 16.18, top: 25, position: 'absolute', transform: 'rotate(-45.02deg)', transformOrigin: '0 0', background: 'white'}}></div>
            </div>
            <div style={{width: 32, height: 32, left: 56, top: 0, position: 'absolute'}}>
                <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', opacity: 0.10, background: 'white', borderRadius: 9999}} />
                <div style={{width: 11.99, height: 12, left: 10.22, top: 10, position: 'absolute', background: 'white'}}></div>
            </div>
            <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', opacity: 0.10, background: 'white', borderRadius: 9999}} />
                <div style={{width: 6, height: 12, left: 13.26, top: 10, position: 'absolute', background: 'white'}}></div>
            </div>
        </div>
        <div style={{left: 538, top: 328, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '500', lineHeight: 25.60, wordWrap: 'break-word'}}>2024 @ Right Resource Fit. All rights reserved.</div>
    </div>
</div>
    )}
export default companyhomepage;
