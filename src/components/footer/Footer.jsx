import React from 'react'
import './FooterStyles.css'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
        <div className="container">
          <div className="col">
            <h3>Menümüzü keşfedin</h3>
            <p>Menü</p>
            <p>İçindekiler</p>
            <p>İçecek Menüsü</p>
          </div>
          <div className="col">
            <h3>Hakkımızda</h3>
            <p>Franchising</p>
            <p>Görev Beyanı</p>
            <p>Hedefler</p>
          </div>
          <div className="col">
            <h3>Bizimle İletişime Geçin</h3>
            <p>Kariyer</p>
            <p>Bize Ulaşın</p>
            <p>Sosyalleşin</p>
          </div>
          <div>
            <h3>İletişime geçelim</h3>
            <div className="social">
              <FaFacebookSquare className='icon' />
              <FaInstagramSquare className='icon' />
              <FaTwitterSquare className='icon' />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer