import React, { Component } from "react"


class Header extends Component {

    render() {

        const user = this.props.user

        return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand">JSON Placeholder</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active">{"User #" + user.id}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Albums</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Photos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Posts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Todos</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
    }
}

export default Header