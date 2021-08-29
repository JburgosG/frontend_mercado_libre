import styled from 'styled-components'

export const Ol = styled.ol`
    li:first-child::before {
        content: var(--bs-breadcrumb-divider, "") !important;
    }

    li:last-child {
        font-weight: bold;
    }
`

export const Li = styled.li`
    &::before {
        content: var(--bs-breadcrumb-divider, ">") !important;
    }
`
