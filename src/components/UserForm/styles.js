import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 8px 0;
`
