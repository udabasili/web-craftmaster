import React, { useEffect, useState } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { IoColorPalette } from 'react-icons/io5';
import { GiShipWheel } from 'react-icons/gi';
import WebsiteTab from './WebsiteTab';
import SettingTab from './SettingTab';
import ThemeTab from './ThemeTab';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function RightPanel({
    value=null,
    type=null
}) {

    const allSelected = document.querySelectorAll('.selectable')
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900)

    function handleWindowResize () {
        setIsMobile(window.innerWidth <= 900)
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    useEffect(() => {
        allSelected.forEach(element => {
            element.classList.remove('selectable')
        });
        if(value && value.classList){
            value.classList.add('selectable')
            setCurrentTab('website')
            if(isMobile) {
                setOverlayState(true)
            }
        }

    }, [value])
    
    const [showOverlay, setOverlayState] = useState(false)
    const [currentTab, setCurrentTab] = useState('website')

    const overlayHandler = () => {
        setOverlayState(false)
        allSelected.forEach(element => {
            element.classList.remove('selectable')
        });
    }

    const setCurrentTabHandler = (key) => {
        return () => {
            setCurrentTab(key)
             if (isMobile) {
                 setOverlayState(true)
             }
            
        }
    }
    

    const COMPONENT_MAP = {
        website: WebsiteTab,
        setting: SettingTab,
        theme: ThemeTab
    }

    const Component = COMPONENT_MAP[currentTab]
    return (
        <div className={`
            right-panel 
            ${showOverlay && 'open'}
            `}>
            <div className="right-panel__tab">
                < ul className="right-panel__list" >
                    <li 
                        className={
                            `right-panel__item
                            ${currentTab === 'website' && 'active'}
                            `
                        } 
                        onClick={setCurrentTabHandler('website')}
                    >
                        <CgWebsite/>
                        <span className="right-panel__label">
                            Website
                        </span>
                    </li>
                    <li 
                        className = {
                            `right-panel__item
                            ${currentTab === 'theme' && 'active'}
                            `
                        }
                        onClick={setCurrentTabHandler('theme')}>
                        <IoColorPalette color='red'/>
                        <span className="right-panel__label">
                            Theme
                        </span>
                    </li>
                    <li 
                        className = {
                            `right-panel__item
                            ${currentTab === 'setting' && 'active'}
                            `
                        }
                        onClick={setCurrentTabHandler('setting')}
                        >
                        <GiShipWheel/>
                        <span className="right-panel__label">
                            Settings
                        </span>
                    </li>
                    {
                        showOverlay &&  ( 
                        <AiFillCloseCircle
                            color="red"
                            onClick={overlayHandler}
                            fontSize="40px"
                        />
                        )
                    }
                    
                </ul>
            </div>
            <div className="right-panel__details">
                {
                    isMobile ? (
                        <Component 
                            type={type} 
                            value={value} 
                            overlayHandler={overlayHandler}/>
                    ) : (
                        <Component 
                            type={type} 
                            value={value} 
                            />
                    )
                }
            </div>
        </div>
    )
}
