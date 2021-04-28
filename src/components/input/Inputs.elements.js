import styled from 'styled-components'

export const InputsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  margin:20px;
`

export const InputWrapper = styled.div`
  display:flex;
  position:relative;
  flex-direction:column-reverse;
  width:${({ fullWidth }) => fullWidth ? "100%" : "200px"};
`

export const Title = styled.div`
color : #4F4F4F;
	font-family : 'Poppins', sans-serif;
	font-weight : 500;
	font-size:24px;
	line-height:36px;
	margin-bottom:26px;
	margin-top:35px;
`

export const StyledInput = styled.input`
  border-radius: 8px;
  font-size:14px;
  font-family: 'Noto Sans JP', sans-serif;
  padding-top:${({ size }) => size === "sm" ? "10px" : "18px"};
  padding-bottom:${({ size }) => size === "sm" ? "10px" : "18px"};
  padding-right:${({ endIcon }) => endIcon ? "45px" : "12px"};
  padding-left:${({ startIcon }) => startIcon ? "45px" : "12px"};
  border: ${({ error, disabled }) => error ? "1px solid #D32F2F"
    : disabled ? "1px solid #E0E0E0" : "1px solid #828282"};
  height : ${({ size }) => size === "sm" ? "40px" : "56px"};
  background: ${({ disabled }) => disabled ? "#F2F2F2" : "none"};

  &:hover{
    border:${({ disabled }) => disabled ? "1px solid #E0E0E0" : "1px solid #333333"} ;
  }

  &:focus{
    outline:none;
    border:${({ error }) => error ? "1px solid #D32F2F"
    : "1px solid #2962FF"};
  }
  &::placeholder{
    color:#828282;
  }
`

StyledInput.defaultProps = {
  size: 'md',
}

export const StyledTextarea = styled.textarea`
  border-radius: 8px;
  padding:18px 12px;
  font-size:14px;
  resize:none;
  font-family: 'Noto Sans JP', sans-serif;
  border: ${({ error, disabled }) => error ? "1px solid #D32F2F"
      : disabled ? "1px solid #E0E0E0" : "1px solid #828282"};
  background: ${({ disabled }) => disabled ? "#F2F2F2" : "none"};
  &:hover{
    border:${({ disabled }) => disabled ? "1px solid #E0E0E0" : "1px solid #333333"} ;
  }

  &:focus{
    outline:none;
    border:${({ error }) => error ? "1px solid #D32F2F"
      : "1px solid #2962FF"};
  }
  &::placeholder{
    color:#828282;
  }
`

export const Message = styled.p`
  font-family : "Noto Sans JP";
  font-weight: 400;
  font-size: 10px;
  line-height: 14.48px;
  margin-top:4px;
  color : ${({ error }) => error ? "#D32F2F" : "#828282"};
`

export const Label = styled.p`
  font-family : "Noto Sans JP";
  font-weight: 400;
  font-size: 10px;
  line-height: 14.48px;
  color : ${({ error }) => error ? "#D32F2F"
      : "#333333"};
  margin-bottom:4px;

  ${StyledInput}:hover ~ & {
    color:#333333;
  }

  ${StyledInput}:focus ~ && {
    color : ${({ error }) => error ? "#D32F2F"
      : "#2962FF"};
  }

  ${StyledTextarea}:hover ~ & {
    color:#333333;
  }

  ${StyledTextarea}:focus ~ && {
    color : ${({ error }) => error ? "#D32F2F"
      : "#2962FF"};
  }
`

export const Text = styled.p`
	font-family: 'Ubuntu Mono', monospace;
	font-size:12px;
	font-weight:400;
	line-height:12px;
	color:#333333;
	margin:16px 0;
`

export const Row = styled.div`
	display:flex;
  margin-bottom:30px;
`

export const ComponentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  flex: ${({ wide }) => wide ? "1" : "0 0 33%"};
`