import React from 'react';
import Finder from '../../assets/img/icons8-mac-logo-40.png'
import Settings from '../../assets/img/2697651_apple_settings_configuration_control_gear_icon.png'
import Safari from '../../assets/img/3377029_logo_media_safari_social_icon.png'
import IMessage from '../../assets/img/2697657_apple_messages_bubble_communication_conversation_icon.png'
import Email from '../../assets/img/2697658_apple_mail_email_envelope_inbox_icon.png'
import Photos from '../../assets/img/2697654_apple_photos_gallery_photo_photography_icon.png'
import Notes from '../../assets/img/2697656_apple_note_document_notebook_notes_icon (1).png'
import Reminder from '../../assets/img/2697653_apple_reminders_list_task_tasks_icon.png'
import WhatsApp from '../../assets/img/2697647_apple_call_messages_whatsapp_chat_icon.png'
import Twitter from '../../assets/img/2697648_apple_twitter_conversation_message_news_icon.png'
import Clock from '../../assets/img/2697661_apple_clock_alarm_hour_schedule_icon.png'

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <div className="main">
                <img style={{width: "64px"}} src={Finder} alt="Finder"/>
                <img src={Settings} alt="Settings"/>
                <img src={Safari} alt="Safari"/>
                <img src={IMessage} alt="IMessage"/>
                <img src={Email} alt="Email"/>
                <img src={Notes} alt="Notes"/>
                <img src={Reminder} alt="Reminder"/>
                <img src={Clock} alt="Clock"/>
                <img src={Photos} alt="Photos"/>
            </div>
            <div className="dock">
                <img src={WhatsApp} alt="WhatsApp"/>
                <img src={Twitter} alt="Twitter"/>
            </div>
        </div>
    );
};

export default MenuBar;
