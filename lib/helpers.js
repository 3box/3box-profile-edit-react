"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveCustomFields = exports.saveBasicTextFields = void 0;

var _eachSeries = _interopRequireDefault(require("async/eachSeries"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var saveBasicTextFields = function saveBasicTextFields(box, space, state, type) {
  return regeneratorRuntime.async(function saveBasicTextFields$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(function (resolve) {
            var basicFields = ['name', 'description', 'emoji'];
            var isGeneralProfile = type === 'originalProfile';
            var originalValues = state[type];

            var func = function func(field, callback) {
              var updatedField, newValue;
              return regeneratorRuntime.async(function func$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      updatedField = isGeneralProfile ? field : "spaceProfile".concat((0, _utils.capitalizeFirstLetter)(field));
                      newValue = state[updatedField];

                      if (!(originalValues[field] !== newValue)) {
                        _context.next = 10;
                        break;
                      }

                      if (!isGeneralProfile) {
                        _context.next = 8;
                        break;
                      }

                      _context.next = 6;
                      return regeneratorRuntime.awrap(box["public"][field !== '' ? 'set' : 'remove'](field, newValue));

                    case 6:
                      _context.next = 10;
                      break;

                    case 8:
                      _context.next = 10;
                      return regeneratorRuntime.awrap(space["public"][field !== '' ? 'set' : 'remove'](field, newValue));

                    case 10:
                      callback();

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            };

            (0, _eachSeries["default"])(basicFields, func, resolve());
          }));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.saveBasicTextFields = saveBasicTextFields;

var saveCustomFields = function saveCustomFields(space, customFields, state, originalSpaceProfile) {
  var func;
  return regeneratorRuntime.async(function saveCustomFields$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          func = function func(field, callback) {
            var newValue, oldValue, method;
            return regeneratorRuntime.async(function func$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    newValue = state[field.key];
                    oldValue = originalSpaceProfile[field.key];

                    if (!(newValue !== oldValue)) {
                      _context3.next = 6;
                      break;
                    }

                    method = newValue !== '' ? 'set' : 'remove';
                    _context3.next = 6;
                    return regeneratorRuntime.awrap(space["public"][method](field.key, newValue));

                  case 6:
                    callback();

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          };

          (0, _eachSeries["default"])(customFields, func);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.saveCustomFields = saveCustomFields;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInNhdmVCYXNpY1RleHRGaWVsZHMiLCJib3giLCJzcGFjZSIsInN0YXRlIiwidHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiYmFzaWNGaWVsZHMiLCJpc0dlbmVyYWxQcm9maWxlIiwib3JpZ2luYWxWYWx1ZXMiLCJmdW5jIiwiZmllbGQiLCJjYWxsYmFjayIsInVwZGF0ZWRGaWVsZCIsIm5ld1ZhbHVlIiwic2F2ZUN1c3RvbUZpZWxkcyIsImN1c3RvbUZpZWxkcyIsIm9yaWdpbmFsU3BhY2VQcm9maWxlIiwia2V5Iiwib2xkVmFsdWUiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUlPLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBT0MsR0FBUCxFQUFZQyxLQUFaLEVBQW1CQyxLQUFuQixFQUEwQkMsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQUFtQyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzdGLGdCQUFNQyxXQUFXLEdBQUcsQ0FBQyxNQUFELEVBQVMsYUFBVCxFQUF3QixPQUF4QixDQUFwQjtBQUNBLGdCQUFNQyxnQkFBZ0IsR0FBR0osSUFBSSxLQUFLLGlCQUFsQztBQUNBLGdCQUFNSyxjQUFjLEdBQUdOLEtBQUssQ0FBQ0MsSUFBRCxDQUE1Qjs7QUFFQSxnQkFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBT0MsS0FBUCxFQUFjQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMQyxzQkFBQUEsWUFESyxHQUNVTCxnQkFBZ0IsR0FBR0csS0FBSCx5QkFBMEIsa0NBQXNCQSxLQUF0QixDQUExQixDQUQxQjtBQUVMRyxzQkFBQUEsUUFGSyxHQUVNWCxLQUFLLENBQUNVLFlBQUQsQ0FGWDs7QUFBQSw0QkFJUEosY0FBYyxDQUFDRSxLQUFELENBQWQsS0FBMEJHLFFBSm5CO0FBQUE7QUFBQTtBQUFBOztBQUFBLDJCQUtMTixnQkFMSztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHNEQU1EUCxHQUFHLFVBQUgsQ0FBV1UsS0FBSyxLQUFLLEVBQVYsR0FBZSxLQUFmLEdBQXVCLFFBQWxDLEVBQTRDQSxLQUE1QyxFQUFtREcsUUFBbkQsQ0FOQzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNEQVFEWixLQUFLLFVBQUwsQ0FBYVMsS0FBSyxLQUFLLEVBQVYsR0FBZSxLQUFmLEdBQXVCLFFBQXBDLEVBQThDQSxLQUE5QyxFQUFxREcsUUFBckQsQ0FSQzs7QUFBQTtBQVlYRixzQkFBQUEsUUFBUTs7QUFaRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFiOztBQWVBLHdDQUFXTCxXQUFYLEVBQXdCRyxJQUF4QixFQUE4QkosT0FBTyxFQUFyQztBQUNELFdBckJxRSxDQUFuQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE1Qjs7OztBQXVCQSxJQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQU9iLEtBQVAsRUFBY2MsWUFBZCxFQUE0QmIsS0FBNUIsRUFBbUNjLG9CQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJQLFVBQUFBLElBRHdCLEdBQ2pCLFNBQVBBLElBQU8sQ0FBT0MsS0FBUCxFQUFjQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMRSxvQkFBQUEsUUFESyxHQUNNWCxLQUFLLENBQUNRLEtBQUssQ0FBQ08sR0FBUCxDQURYO0FBRUxDLG9CQUFBQSxRQUZLLEdBRU1GLG9CQUFvQixDQUFDTixLQUFLLENBQUNPLEdBQVAsQ0FGMUI7O0FBQUEsMEJBSVBKLFFBQVEsS0FBS0ssUUFKTjtBQUFBO0FBQUE7QUFBQTs7QUFLSEMsb0JBQUFBLE1BTEcsR0FLTU4sUUFBUSxLQUFLLEVBQWIsR0FBa0IsS0FBbEIsR0FBMEIsUUFMaEM7QUFBQTtBQUFBLG9EQU1IWixLQUFLLFVBQUwsQ0FBYWtCLE1BQWIsRUFBcUJULEtBQUssQ0FBQ08sR0FBM0IsRUFBZ0NKLFFBQWhDLENBTkc7O0FBQUE7QUFTWEYsb0JBQUFBLFFBQVE7O0FBVEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEaUI7O0FBYTlCLHNDQUFXSSxZQUFYLEVBQXlCTixJQUF6Qjs7QUFiOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaFNlcmllcyBmcm9tICdhc3luYy9lYWNoU2VyaWVzJztcblxuaW1wb3J0IHtcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLFxufSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHNhdmVCYXNpY1RleHRGaWVsZHMgPSBhc3luYyAoYm94LCBzcGFjZSwgc3RhdGUsIHR5cGUpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IGJhc2ljRmllbGRzID0gWyduYW1lJywgJ2Rlc2NyaXB0aW9uJywgJ2Vtb2ppJ107XG4gIGNvbnN0IGlzR2VuZXJhbFByb2ZpbGUgPSB0eXBlID09PSAnb3JpZ2luYWxQcm9maWxlJztcbiAgY29uc3Qgb3JpZ2luYWxWYWx1ZXMgPSBzdGF0ZVt0eXBlXTtcblxuICBjb25zdCBmdW5jID0gYXN5bmMgKGZpZWxkLCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRGaWVsZCA9IGlzR2VuZXJhbFByb2ZpbGUgPyBmaWVsZCA6IGBzcGFjZVByb2ZpbGUke2NhcGl0YWxpemVGaXJzdExldHRlcihmaWVsZCl9YDtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHN0YXRlW3VwZGF0ZWRGaWVsZF07XG5cbiAgICBpZiAob3JpZ2luYWxWYWx1ZXNbZmllbGRdICE9PSBuZXdWYWx1ZSkge1xuICAgICAgaWYgKGlzR2VuZXJhbFByb2ZpbGUpIHtcbiAgICAgICAgYXdhaXQgYm94LnB1YmxpY1tmaWVsZCAhPT0gJycgPyAnc2V0JyA6ICdyZW1vdmUnXShmaWVsZCwgbmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgc3BhY2UucHVibGljW2ZpZWxkICE9PSAnJyA/ICdzZXQnIDogJ3JlbW92ZSddKGZpZWxkLCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGJhY2soKTtcbiAgfTtcblxuICBlYWNoU2VyaWVzKGJhc2ljRmllbGRzLCBmdW5jLCByZXNvbHZlKCkpO1xufSlcblxuZXhwb3J0IGNvbnN0IHNhdmVDdXN0b21GaWVsZHMgPSBhc3luYyAoc3BhY2UsIGN1c3RvbUZpZWxkcywgc3RhdGUsIG9yaWdpbmFsU3BhY2VQcm9maWxlKSA9PiB7XG4gIGNvbnN0IGZ1bmMgPSBhc3luYyAoZmllbGQsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBzdGF0ZVtmaWVsZC5rZXldO1xuICAgIGNvbnN0IG9sZFZhbHVlID0gb3JpZ2luYWxTcGFjZVByb2ZpbGVbZmllbGQua2V5XTtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIGNvbnN0IG1ldGhvZCA9IG5ld1ZhbHVlICE9PSAnJyA/ICdzZXQnIDogJ3JlbW92ZSc7XG4gICAgICBhd2FpdCBzcGFjZS5wdWJsaWNbbWV0aG9kXShmaWVsZC5rZXksIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjaygpO1xuICB9O1xuXG4gIGVhY2hTZXJpZXMoY3VzdG9tRmllbGRzLCBmdW5jKTtcbn0iXX0=