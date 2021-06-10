import React from "react"

import App from "./App"
import Tenon from "@hummer/tenon-react"
import ExWebView from './plugin/index'
import ExPopup from './plugin/popup'

import "./App.less"


Tenon.register(ExWebView)
Tenon.register(ExPopup)

Tenon.render(<App />)