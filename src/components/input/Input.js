import React from 'react'
import { StyledInput, InputWrapper, Message, Label, StyledTextarea } from './Inputs.elements'

const Input = (props) => {
  const { error, disabled, fullWidth, multiline, rows, helperText, size, value, endIcon, startIcon, label } = props;
  return (
    <>
      <InputWrapper fullWidth={fullWidth}>
        {
          (startIcon || endIcon) && <Icon startIcon={startIcon} endIcon={endIcon} />
        }
        {
          multiline ? <StyledTextarea
            error={error}
            size={size}
            value={value}
            disabled={disabled}
            rows={rows}
            startIcon={startIcon} 
            endIcon={endIcon}
            placeholder="Placeholder" />
            : <StyledInput
              error={error}
              size={size}
              value={value}
              disabled={disabled}
              startIcon={startIcon} 
              endIcon={endIcon}
              placeholder="Placeholder" />
        }
        <Label error={error}>
          {label || "Label"}
        </Label>
      </InputWrapper>
      {
        helperText && <Message error={error}>{helperText}</Message>
      }
    </>
  )
}

export default Input

const Icon = ({ startIcon, endIcon }) => {
  return <i className="material-icons"
    style={{
      position: 'absolute',
      color: "#828282",
      fontSize:"18px",
      bottom:"19px",
      padding:" 0 12px",
      right:`${endIcon&&"0"}`
    }}>
    {startIcon||endIcon}
        </i>
}
