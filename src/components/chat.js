import React from 'react'
import { animateScroll } from "react-scroll"

import './chat.css'
class Chat extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      context: {}
    }
  }

  componentDidMount() {
    this.getWatsonMessageAndInsertTemplate()
    this.scrollToBottom()
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "chat"
    })
  }

  getWatsonMessageAndInsertTemplate(text = '') {
    const uri = 'https://shrouded-wave-96094.herokuapp.com/conversation/';

    let context = this.state.context
    fetch(uri, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        context,
      })
    })
      .then(res => res.json())
      .then((response) => {
        context = response.context

        const template = this.templateChatMessage(response.output.text, 'user');
        this.InsertTemplateInTheChat(template)

        // if (response.output.options) {
        //     document.querySelector('p').insertAdjacentHTML('afterend', `<div class="options-dialog" id="${response.output.title}"></div>`);
        //     const options = response.output.options
        //     let elementsHTML = ''
        //     options.forEach(option => {
        //         const html_option = `<a href="#" class="input-option" id="${option.value.input.text}" onclick="dialogOption(this)">${option.label}</a><br>`
        //         elementsHTML += html_option
        //     })

        //     document.getElementById(`${response.output.title}`).insertAdjacentHTML('afterbegin', elementsHTML)
        // }
      })
  }

  dialogOption(option) {
    this.getWatsonMessageAndInsertTemplate(option.innerHTML)

    const template = this.templateChatMessage(option.innerHTML, 'user')
    this.InsertTemplateInTheChat(template)
  }

  templateChatMessage(message, from) {
    return `
        <div class="from-${from}">
          <div class="message-inner">
            <p>${message}</p>
          </div>
        </div>
        `
  }

  InsertTemplateInTheChat(template) {
    const div = document.createElement('div')
    div.innerHTML = template

    document.getElementById('chat').appendChild(div)
  }

  keyPressed(event) {
    if (event.key === 'Enter' && this.state.name) {
      this.getWatsonMessageAndInsertTemplate(this.state.name)

      const template = this.templateChatMessage(this.state.name, 'user')
      this.InsertTemplateInTheChat(template)
      this.setState({name: ''})
    }
  }

  change(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <div className="chat-column">
        <div id="chat"></div>
        <label className="inputOutline">
          <input value={this.state.name}
            onKeyPress={(e) => this.keyPressed(e)}
            onChange={(e) => this.change(e)}
            className='input responsive-column'
            placeholder='Escreva aqui...'
          />
        </label>
      </div>
    )
  }
}

export default Chat