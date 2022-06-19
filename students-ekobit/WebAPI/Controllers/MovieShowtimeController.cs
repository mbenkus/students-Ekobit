using Library.Models;
using Library.Services;
using Microsoft.AspNetCore.Mvc;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieShowtimeController : ControllerBase
    {
        private readonly MovieShowtimeService _movieShowtimeService;

        public MovieShowtimeController(MovieShowtimeService movieShowtimeService)
        {
            _movieShowtimeService = movieShowtimeService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var items = await _movieShowtimeService.GetAllAsync();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var item = await _movieShowtimeService.GetAsync(id);
            return Ok(item);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] MovieShowtime model)
        {
            var item = await _movieShowtimeService.CreateAsync(model);
            return Ok(item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] MovieShowtime model)
        {
            var item = await _movieShowtimeService.UpdateAsync(id, model);
            return Ok(item);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _movieShowtimeService.DeleteAsync(id); ;
            return Ok();
        }
    }
}
