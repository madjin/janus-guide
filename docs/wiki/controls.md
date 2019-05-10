# Controls

JanusWeb is built on top of Elation Engine, and uses its control mapping system.  We provide a layer which translates a multitude of different controllers - tracked VR controllers, 3dof remotes, gamepads, joysticks, steering wheels, etc. into a set of standard actions, which can then be bound by the application in a way which, as much as possible, is agnostic to the type of controller being used.  The application or its users can specify a control mapping which maps the buttons, axes, positions, and other functionality of these controllers directly to game actions.

## Controller Types

### Oculus Touch / HTC Vive
 * left_trigger
 * left_grip
 * left_stick_x
 * left_stick_y
 * left_stick_click
 * left_button0
 * left_button1
 * left_position
 * left_orientation
 * right_trigger
 * right_grip
 * right_stick_x
 * right_stick_y
 * right_stick_click
 * right_button0
 * right_button1
 * right_position
 * right_orientation
 * any_trigger
 * any_grip
 * any_stick_x
 * any_stick_y
 * any_stick_click
 * any_button0
 * any_button1

### Google Daydream
 * touchpad_x
 * touchpad_y
 * touchpad_click
 * button0
 * orientation

### X-box 360/One controller
 * left_stick_x
 * left_stick_y
 * left_stick_click
 * left_trigger
 * left_shoulder
 * right_stick_x
 * right_stick_y
 * right_stick_click
 * right_trigger
 * right_shoulder
 * button_a
 * button_b
 * button_x
 * button_y
 * button_start
 * button_select
 * dpad_up
 * dpad_right
 * dpad_down
 * dpad_left

# Contexts
Elation Engine's control mappings work on the concept of "contexts".  For instance, JanusWeb defines a default control context, "janus", which exposes some basic UI controls:
### "janus" context
 * load_url
 * room_debug
 * chat
 * bookmark
 * mute

It also exposes a context for the player:
### "janusplayer" context
 * voip_activate
 * browse_back
 * browse_forward

And builds on Elation Engine's default player context:
### "player" context
 * move_forward
 * move_backward
 * move_left
 * move_right
 * move_up
 * move_down
 * turn_left
 * turn_right
 * mouse_look
 * look_up
 * look_down
 * run
 * crouch
 * activate

So now we can map the controller names to actions in the proper contexts:

```
{ 
  controller: 'Google Daydream',
  contexts: {
    player: {
      move_forward: 'touchpad_y',
      move_right: 'touchpad_x',
      activate: 'button0'
    }
  }
}
```
```
{
  controller: 'Oculus Touch',
  contexts: {
    player: {
      move_forward: 'left_stick_y',
      move_right: 'left_stick_x',
      turn_right: 'right_stick_x',
      activate: 'right_button0',
      
    },
    janusplayer: {
      voip_activate: 'left_button0'
    }
  }
}
```
